import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LikeButtons from '../likes/like_buttons';
import UserIcon from '../icons/user_icon';
import { formatDetailViews } from '../../util/views_util';

class VideoDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
     return (
      <div className="video-details-container">
        <div className="video-details-primary-info">
          <h1 className="video-details-title">{this.props.video.title}</h1>
          <div className="video-details-views-likes-container">
            <div className="video-details-views">{formatDetailViews(this.props.video.views)}</div>
            <LikeButtons 
              currentUserId={this.props.session.currentUserId}
              type="Video"
              id={this.props.video.id}
              numLikes={this.props.video.numLikes}
              numDislikes={this.props.video.numDislikes}
            />
          </div>
        </div>
        <div className = "video-details-secondary-info">
          <UserIcon user={this.props.user} className="video-details-icon"/>
          <div className="video-details-upload-info-container">
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
      </div>
    );
  }
}

export default VideoDetails
