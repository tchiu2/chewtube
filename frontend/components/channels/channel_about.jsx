import React from 'react';
import { formatDateLong } from '../../util/date_util';
import { formatDetailViews } from '../../util/views_util';

const ChannelAbout = ({ channel }) => (
  <div className="channel-about-page">
    <div className="channel-description-container">
      <div className="channel-description-heading">Description</div>
      <div className="channel-descprition">{channel.description}</div>
    </div>
    <div className="channel-stats">
      <div className="channel-stats-heading">Stats</div>
      <div className="channel-join-date">Joined {formatDateLong(channel.createdAt)}</div>
      <div className="channel-total-views">{formatDetailViews(channel.totalViews)}</div>
    </div>
  </div>
);

export default ChannelAbout;
