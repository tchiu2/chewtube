import React from 'react';
import { Link } from 'react-router-dom';

const ChannelIcon = ({ image, channel, className }) => (
  <Link to={`/channels/${channel.id}`}>
    <button className={`${className === undefined ? "" : className}${image === undefined ? "default-channel-icon" : ""}`}>
      {image !== undefined ? (
          <img src={image} />
        ) : (
          channel.name.slice(0,1)
        )
      }
    </button>
  </Link>
);

export default ChannelIcon;
