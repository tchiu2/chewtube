import React from 'react';

const ChannelAbout = ({ channel }) => (
  <div className="channel-about-page">
    <div className="channel-description">{channel.description}</div>
    <div className="channel-stats">
      <h3 className="channel-stats-heading">Stats</h3>
      <div className="channel-join-date">{channel.createdAt}</div>
    </div>
  </div>
);

export default ChannelAbout;
