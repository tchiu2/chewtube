import React, { Component } from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos("");
  }

  render() {
    const indexItems = this.props.videos.length > 0 ? this.props.videos.map((video, idx) => <VideoIndexItem key={idx} video={video} channel={this.props.channels[video.channelId]} />) : "";
    return (
      <div className="video-index">
        <h1 className="shelf-title">Homepage</h1>
        <ul className="video-index-shelf">
          {indexItems} 
        </ul>
      </div>
    );
  }
}

export default VideoIndex;
