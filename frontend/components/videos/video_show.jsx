import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Video from './video';
import VideoDetails from './video_details';
import CommentsSection from '../comments/comments_section';

class VideoShow extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
  }

  render() {  
    return (this.props.video === undefined || this.props.user === undefined) ? null : 
      (
        <div className="video-show-container">
          <Video src={this.props.video.videoUrl} />
          <div className="video-show-info-container">
            <VideoDetails video={this.props.video} user={this.props.user} />
            {this.props.video.uploaderId === this.props.session.currentUserId ? 
              ( 
                <Link 
                  to={
                      { pathname: `/videos/${this.props.video.id}/edit`, 
                      state: { video: this.props.video } }
                     }>
                  Edit video
                </Link>
              ) : null 
            }
          </div>
          <CommentsSection video={this.props.video} />
        </div>
    )
  }
}
export default VideoShow;
