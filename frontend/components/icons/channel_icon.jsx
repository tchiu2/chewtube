import React from 'react';

const ChannelIcon = ({ image, channel, className }) => (
  <button className={`${className === undefined ? "" : className} ${image === undefined ? "default-channel-icon" : ""}`}>
    {image !== undefined ? (
        <img src={image} />
      ) : (
        channel.name.slice(0,1)
      )
    }
  </button>
);

export default ChannelIcon;
