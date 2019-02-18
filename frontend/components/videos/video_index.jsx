import React, { Component } from 'react';
import VideoList from './video_list';

class VideoIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos({ home: true });
  }

  render() {
    const shelves = Object.keys(this.props.channels).map(channelId => {
      return <VideoList
        key={channelId}
        title={this.props.channels[channelId].name}
        loadType="click"
        videos={this.props.videos.filter(video => video.channelId === parseInt(channelId))}
        channels={this.props.channels}
      />
    });

    return (
      <div className="video-index">
        {shelves}
      </div>
    );
  }
}

VideoIndex.defaultProps = {
  channels: {},
}

export default VideoIndex;
