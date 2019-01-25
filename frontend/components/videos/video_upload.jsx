import React, { Component } from 'react'

class VideoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
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
    
    this.props.upload(formData);
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit} className="video-upload-form-container">
      <video width="200" height="112"
        id="video" 
        src={this.state.videoUrl} 
        hidden={this.state.videoUrl === "" ? "hidden" : ""}/>

      <img src={this.state.thumbUrl} />

      <label 
        htmlFor="file-input" 
        className="video-upload-form-icon">
      	<i className="fas fa-file-upload"></i>
      </label>

      <input 
        className="video-upload-form-file-input"
        id="file-input"
        type="file"
        accept="video/*"
        onChange={(e) => this.readFile(e)}
        onClick={(e) => event.target.value = null}
       />

      <input
        className="video-upload-form-input"
        type="text"
        placeholder="Title" 
				onChange={this.update('title')}
      />

      <textarea
        className="video-upload-form-description"
        placeholder="Description"
				onChange={this.update('description')}
      />

      <button className="video-upload-form-submit">Upload video</button>
    </form>
    );
  };
}

export default VideoUpload;
