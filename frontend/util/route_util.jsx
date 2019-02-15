import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = ({ entities: { users, channels }, session: { currentUserId }}) => ({
  users,
  channels,
  currentUserId,
  loggedIn: Boolean(currentUserId),
});

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/login" /> 
    )}
  />
);

const ChannelRequired = ({ users, currentUserId, path, ...rest }) => (
  <Route
    path={path}
    render={props => {
       const ownedChannels = users[currentUserId].ownedChannelIds || [];
       return ownedChannels.length === 0 ? <Redirect to="/create_channel" /> : <ProtectedRoute path={path} {...props} />
    }}
  />
);

const CreateChannel = ({ users, currentUserId, loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => {
       if (loggedIn) {
         const ownedChannels = users[currentUserId].ownedChannelIds || [];
         return ownedChannels.length === 0 ? <Component {...props} /> : <Redirect to={`/channels/${ownedChannels[0]}`} /> 
       } else {
         return <Redirect to="/login" />
       }
    }}
  />
);

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
export const ChannelRequiredRoute = withRouter(connect(msp)(ChannelRequired));
export const CreateChannelRoute = withRouter(connect(msp)(CreateChannel));
