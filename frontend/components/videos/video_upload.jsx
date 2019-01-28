import React, { Component } from 'react'

class VideoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.video, formSubmitted: false };
    this.readFile = this.readFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateThumbnail = this.generateThumbnail.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
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
		canvas.width = video.width;
		canvas.height = video.height;
		canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/png"); 
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
    formData.append('video[uploader_id]', this.props.currentUserId);

    if (this.state.videoFile) {
      const thumbUrl = this.generateThumbnail(document.getElementById('video'));
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

                <button 
                  disabled={this.state.formSubmitted}
                  className="video-upload-form-submit">
                  {this.state.formSubmitted ? "Uploading..." : "Upload"}
                </button>
            </>
            ) : ("")}
        </form>
      </div>
    );
  };
}

export default VideoUpload;
