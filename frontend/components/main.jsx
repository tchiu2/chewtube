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
import VideoEditContainer from './videos/video_edit_container';
import SearchResultsContainer from './search/search_results_container';

const Main = () => (
  <div className="main-container">
    <header>
      <NavBarContainer /> 
    </header>
    <div>
      <Switch>
        <ProtectedRoute path="/upload" component={VideoUploadContainer} />
        <ProtectedRoute path="/videos/:videoId/edit" component={VideoEditContainer} />
        <Route path="/videos/:videoId" component={VideoShowContainer} />
        <Route path="/results" component={SearchResultsContainer} />
        <Route path="/" component={VideoIndexContainer} />
      </Switch>
    </div>
  </div>
);

export default Main;
