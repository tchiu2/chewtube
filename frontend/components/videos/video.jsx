import React, { Component } from 'react';

export default ({ src, poster }) => (
  <div className="video-content-container">
    <video controls
        id="video-content"
        src={src}
        poster={poster}>
    </video>
  </div>
);
