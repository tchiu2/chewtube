import React, { Component } from 'react';

export default ({ src, poster }) => (
  <video controls
      src={src}
      poster={poster}
      width="620">
  </video>
);
