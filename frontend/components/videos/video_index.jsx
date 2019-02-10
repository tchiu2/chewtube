import React, { Component } from 'react';
import VideoList from './video_list';

class VideoIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos("");
  }

  render() {
    return (
      <VideoList 
        title="Homepage" 
        className="video-index"
        videos={this.props.videos} 
        channels={this.props.channels}
      />
    );
  }
}

export default VideoIndex;
