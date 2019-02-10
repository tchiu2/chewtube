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

const ChannelRequired = ({ users, currentUserId, loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => {
       if (loggedIn) {
         const ownedChannels = users[currentUserId].ownedChannelIds || [];
         return ownedChannels.length === 0 ? <Redirect to="/create_channel" /> : <Component {...props} />
       } else {
         return <Redirect to="/login" />
       }
    }}
  />
);

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
export const ChannelRequiredRoute = withRouter(connect(msp)(ChannelRequired));
