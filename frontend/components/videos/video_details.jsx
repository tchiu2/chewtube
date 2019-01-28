import React, { Component } from 'react';

class VideoDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
     return (
      <div className="video-details-container">
        <div className="video-details-primary-info">
          <h1 className="video-details-title">{this.props.video.title}</h1>
          <div className="video-details-views">301 views</div>
        </div>
        <div className = "video-details-secondary-info">
          <div className="video-details-upload-info">
            <div className="video-details-uploader">{this.props.user.username}</div>
            <div className="video-details-publish-date">Published on {this.props.video.createdAt.split('T')[0]}</div>
          </div>
          <div className="video-details-description">{this.props.video.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetails
