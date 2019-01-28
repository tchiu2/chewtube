import React, { Component } from 'react';

class VideoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.location.state.video, formSubmitted: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[id]', this.props.match.params.videoId);
    
    this.setState({
      formSubmitted: true
    });

    this.props.updateVideo(formData, this.props.history);
  }

  render() {
    return (
      <div className="video-upload-form-container">
        <form onSubmit={this.handleSubmit} className="video-upload-form">
          <div className="video-upload-form-details-container">
            <h2 className="video-upload-form-details-header">Video details</h2>

            <input
              className="video-upload-form-input"
              required
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
            />

            <textarea
              className="video-upload-form-description"
              required
              value={this.state.description}
              onChange={this.update('description')}
            />
          </div>

          <button 
            disabled={this.state.formSubmitted}
            className="video-upload-form-submit">
            {this.state.formSubmitted ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    );
  };
}

export default VideoEdit;
