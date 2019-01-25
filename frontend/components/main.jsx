import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
} from '../util/route_util';

import NavBarContainer from './navbar/navbar_container';
import VideoContainer from './videos/video_container';
import VideoUploadContainer from './videos/video_upload_container';

const Main = () => (
  <div className="main-container">
    <header>
      <NavBarContainer /> 
    </header>
    <Switch>
      <Route path="/upload" component={VideoUploadContainer} />
      <Route path="/" component={VideoContainer} /> 
    </Switch>
  </div>
);

export default Main;
