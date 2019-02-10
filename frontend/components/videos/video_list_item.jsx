import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';
import { formatThumbnailViews } from '../../util/views_util';

const VideoListItem = ({ video, channel, forChannel }) => (
  <Link to={`/videos/${video.id}`} className="video-list-item">
    <img className="list-item-thumbnail" src={video.thumbUrl} />
    <div className="list-item-details">
      <div className="list-item-title">{video.title}</div>
      {forChannel === 'true' || channel === undefined ? null : (
        <div className="list-item-uploader">{channel.name}</div>
      )}
      <div className="list-item-views-date">
        <div className="list-item-views">{formatThumbnailViews(video.views)}</div>
        &#8226;
        <div className="list-item-date">{formatDate(video.createdAt)}</div>
      </div>
    </div>
  </Link>
);

export default VideoListItem;
