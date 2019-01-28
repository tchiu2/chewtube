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
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import VideoUploadContainer from './videos/video_upload_container';

const Main = () => (
  <div className="main-container">
    <header>
      <NavBarContainer /> 
    </header>
    <Switch>
      <ProtectedRoute path="/upload" component={VideoUploadContainer} />
      <Route path="/videos/:videoId" component={VideoShowContainer} />
      <Route path="/" component={VideoIndexContainer} />
    </Switch>
  </div>
);

export default Main;
