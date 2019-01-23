import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

const msp = ({ errors: { session }}) => {
  return {
    user: { username: '', password: '', email: '' },
    errors: session,
    formType: 'signup',
    navLink: <Link to="/login">Sign in</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
  };
};

export default connect(msp, mdp)(SessionForm);
