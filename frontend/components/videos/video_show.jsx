import React, { Component } from 'react';
import Video from './video';
import VideoDetails from './video_details';

class VideoShow extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
  }

  render() {  
    return this.props.video === undefined ? null : 
        (
          <div className="video-show-container">
            <Video src={this.props.video.videoUrl} />
            <VideoDetails video={this.props.video} user={this.props.user} />
          </div>
        )
  }
}
export default VideoShow;
