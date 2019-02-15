import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ className, channels, title, videos, forChannel }) => (
  <div className={className}>
    <h1 className="list-title">{title}</h1>
    <ul className="video-list">
      {videos.map((video, idx) => (
        <VideoListItem key={idx} video={video} channel={channels[video.channelId]} forChannel={forChannel} />
      ))} 
    </ul>
  </div>
);

VideoList.defaultProps = {
  videos: []
};

export default VideoList;
