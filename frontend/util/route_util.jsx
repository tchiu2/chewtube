import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = ({ session: { currentUserId }}) => ({
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

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
