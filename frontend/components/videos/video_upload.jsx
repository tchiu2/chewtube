import React, { Component } from 'react'

class VideoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.video, formSubmitted: false };
    this.updateFrame = this.updateFrame.bind(this);
    this.readFile = this.readFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.generateThumbnail = this.generateThumbnail.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFrame(e) {
    this.video.currentTime = 2;
  }

  readFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => 
      this.setState({ 
        videoUrl: reader.result, 
        videoFile: file, 
      });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ videoUrl: "", videoFile: null, title: "" });
    }
  }

  generateThumbnail(video) {
		const canvas = document.createElement("canvas");
		canvas.width = video.videoWidth / 3;
		canvas.height = video.videoHeight / 3;
		canvas.getContext("2d").drawImage(
      video, 
      0,
      0,
      video.videoWidth,
      video.videoHeight,
      0, 
      0, 
      canvas.width, 
      canvas.height);
    return canvas.toDataURL("image/png", 0.5); 
   }

  dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[channel_id]', this.props.users[this.props.currentUserId].ownedChannelIds[0]);

    if (this.state.videoFile) {
      const thumbUrl = this.generateThumbnail(this.video);
      const thumbnail = this.dataURLtoFile(thumbUrl, `${this.state.title}_thumb.png`);
      this.setState({
        thumbUrl,
      });

      formData.append('video[thumbnail]', thumbnail);
      formData.append('video[video]', this.state.videoFile);
    }
    
    this.setState({
      formSubmitted: true
    });

    this.props.upload(formData);
  }

  handleCancel(e) {
    e.preventDefault();
    const userChannelId = this.props.users[this.props.currentUserId].ownedChannelIds[0];
    this.props.history.push(`/channels/${userChannelId}`);
  }

  render() {
    return (
      <div className="video-upload-form-container">
        <form onSubmit={this.handleSubmit} className="video-upload-form">
          <div className="video-file-container">
            <label 
              htmlFor="file-input" 
              className="video-upload-form-icon">
              { this.state.videoUrl ?
                (
                  <video width="250" height="141"
                    ref={node => this.video = node}
                    onLoadedData={this.updateFrame}
                    id="video" 
                    src={this.state.videoUrl} 
                    hidden={this.state.videoUrl === "" ? "hidden" : ""}/>
                ) : (
                  <>
                    <i className="fas fa-file-upload"></i>
                    <div className="video-upload-form-icon-text">
                      Select file to upload
                    </div>
                  </>
                )}
            </label>
          </div>

          <input 
            className="video-upload-form-file-input"
            id="file-input"
            type="file"
            accept="video/*"
            onChange={(e) => this.readFile(e)}
            onClick={(e) => event.target.value = null}
           />

          { this.state.videoUrl ?
            (
              <>
                <div className="video-upload-form-details-container">
                  <h2 className="video-upload-form-details-header">Video details</h2>

                  <input
                    className="video-upload-form-input"
                    required
                    type="text"
                    placeholder="Title" 
                    onChange={this.update('title')}
                  />

                  <textarea
                    className="video-upload-form-description"
                    required
                    placeholder="Description"
                    onChange={this.update('description')}
                  />
                </div>

                <div className="video-upload-buttons">
                  <button 
                    disabled={this.state.formSubmitted}
                    onClick={this.handleCancel}
                    className="form-cancel">
                    Cancel
                  </button>

                  <button 
                    disabled={this.state.formSubmitted}
                    className="form-submit">
                    {this.state.formSubmitted ? "Uploading..." : "Upload"}
                  </button>
                </div>
            </>
            ) : ("")}
        </form>
      </div>
    );
  };

}
export default VideoUpload;
