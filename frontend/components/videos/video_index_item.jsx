import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';

const VideoIndexItem = ({ video, uploader }) => (
  <Link to={`/videos/${video.id}`} className="video-index-item">
    <img className="index-item-thumbnail" src={video.thumbUrl} />
    <div className="index-item-details">
      <div className="index-item-title">{video.title}</div>
      <div className="index-item-uploader">{uploader.username}</div>
      <div className="index-item-date">{formatDate(video.createdAt)}</div>
    </div>
  </Link>
);

export default VideoIndexItem;
