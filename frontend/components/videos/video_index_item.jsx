import React, { Component } from 'react';

const VideoIndexItem = ({ video, uploader }) => (
  <div className="video-index-item">
    <img src={video.thumbUrl} />
    <div>{video.title}</div>
    <div>{uploader.username}</div>
    <div>{video.createdAt}</div>
  </div>
);

export default VideoIndexItem;
