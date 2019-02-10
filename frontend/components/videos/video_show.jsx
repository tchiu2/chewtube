import React, { Component } from 'react';
import Video from './video';
import VideoDetails from './video_details';
import CommentsSection from '../comments/comments_section';

class VideoShow extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
    this.props.view(this.props.match.params.videoId);
  }

  render() {  
    return (this.props.video === undefined || this.props.channel === undefined) ? null : 
      (
        <div className="video-show-container">
          <Video src={this.props.video.videoUrl} />
          <div className="video-show-info-container">
            <VideoDetails 
              video={this.props.video} 
              session={this.props.session}
              channel={this.props.channel}
            />
          </div>
          <CommentsSection video={this.props.video} />
        </div>
    )
  }
}
export default VideoShow;
