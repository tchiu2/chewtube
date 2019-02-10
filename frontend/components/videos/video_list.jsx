import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ className, channels, title, videos }) => {
  const listItems = videos.length > 0 ? videos.map((video, idx) => <VideoListItem key={idx} video={video} channel={channels[video.channelId]} />) : "";
  return (
  <div className={className !== undefined ? className : ""}>
    <h1 className="list-title">Homepage</h1>
    <ul className="video-list">
      {listItems} 
    </ul>
  </div>
  );
}

export default VideoList;
