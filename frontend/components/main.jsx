import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
  ChannelRequiredRoute, 
  CreateChannelRoute,
} from '../util/route_util';

import NavBarContainer from './navbar/navbar_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import VideoUploadContainer from './videos/video_upload_container';
import VideoEditContainer from './videos/video_edit_container';
import SearchResultsContainer from './search/search_results_container';
import ChannelContainer from './channels/channel_container';
import CreateChannelContainer from './channels/create_channel_container';

const Main = () => (
  <div className="main-container">
    <header>
      <NavBarContainer /> 
    </header>
    <Switch>
      <ChannelRequiredRoute path="/upload" component={VideoUploadContainer} />
      <ProtectedRoute path="/videos/:videoId/edit" component={VideoEditContainer} />
      <Route path="/videos/:videoId" component={VideoShowContainer} />
      <Route path="/channels/:channelId" component={ChannelContainer} />
      <CreateChannelRoute path="/create_channel" component={CreateChannelContainer} />
      <Route path="/results" component={SearchResultsContainer} />
      <Route path="/" component={VideoIndexContainer} />
    </Switch>
  </div>
);

export default Main;
