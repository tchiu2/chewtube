import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { 
	AuthRoute,
	ProtectedRoute,
} from '../util/route_util';

import Main from './main.jsx';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
