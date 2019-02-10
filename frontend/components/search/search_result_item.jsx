import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatThumbnailViews } from '../../util/views_util';
import { formatDate } from '../../util/date_util';

const SearchResultItem = ({ video, channel }) => (
  <div>
    <Link to={`/videos/${video.id}`} className="search-result">
      <img src={video.thumbUrl} className="search-result-thumb" />
      <div className="search-result-content">
        <h2 className="search-result-title">{video.title}</h2>
        <div className="search-result-details">
          <div className="search-result-uploader">{channel.name}</div>
          &#8226;
          <div className="search-result-views">{formatThumbnailViews(video.views)}</div>
          &#8226;
          <div className="search-result-date">{formatDate(video.createdAt)}</div>
        </div>
        <div className="search-result-description">{video.description}</div>
      </div>
    </Link>
  </div>
);

export default SearchResultItem;
