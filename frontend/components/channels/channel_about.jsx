import React from 'react';

const ChannelAbout = ({ channel }) => (
  <div className="channel-about-page">
    <div className="channel-description">{channel.description}</div>
    <div className="channel-stats">
      <div className="channel-stats-heading">Stats</div>
      <div className="channel-join-date">{channel.createdAt}</div>
    </div>
  </div>
);

export default ChannelAbout;
