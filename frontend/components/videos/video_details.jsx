import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LikeButtons from '../likes/like_buttons';
import ChannelIcon from '../icons/channel_icon';
import { formatDetailViews } from '../../util/views_util';
import { formatDateLong } from '../../util/date_util';

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
          <ChannelIcon channel={this.props.channel} className="video-details-icon "/>
          <div className="video-details-upload-info-container">
            <div className="video-details-upload-info">
              <Link to={`/channels/${this.props.channel.id}`}>
                <div className="video-details-uploader">{this.props.channel.name}</div>
              </Link>
              <div className="video-details-publish-date">Published on {formatDateLong(this.props.video.createdAt)}</div>
              {this.props.channel.ownerId === this.props.session.currentUserId ? 
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
