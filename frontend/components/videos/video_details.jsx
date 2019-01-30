import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            {this.props.video.uploaderId === this.props.session.currentUserId ? 
              ( 
                <Link 
                  className="video-show-edit-btn"
                  to={
                      { pathname: `/videos/${this.props.video.id}/edit`, 
                      state: { video: this.props.video } }
                     }>
                  Edit video
                </Link>
              ) : null 
            }
          </div>
          <div className="video-details-description">{this.props.video.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetails
