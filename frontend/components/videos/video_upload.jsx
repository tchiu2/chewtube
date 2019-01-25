import React, { Component } from 'react'

class VideoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
    this.readFile = this.readFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[uploader_id]', this.props.currentUserId);

    if (this.state.videoFile) {
      formData.append('video[video]', this.state.videoFile);
    }

    if (this.state.thumbnail) {
      formData.append('video[thumbnail]', this.state.thumbnail);
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

      <label 
        htmlFor="file-input" 
        className="video-upload-form-icon">
        ICON GOES HERE
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
      />

      <textarea
        className="video-upload-form-description"
        placeholder="Description"
      />

      <button className="video-upload-form-submit">Upload video</button>
    </form>
    );
  };
}

export default VideoUpload;
