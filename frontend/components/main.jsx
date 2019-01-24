import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import VideoContainer from './video/video_container';

const Main = () => (
  <div>
    <header>
      <NavBarContainer /> 
    </header>
    <Route path="/" component={VideoContainer} /> 
  </div>
);

export default Main;
