import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

const msp = ({ errors: { session }}) => {
  return {
    user: { username: '', email: '', password: '' },
    errors: session,
    formType: 'signup',
    navLink: <Link to="/login" className="session-form-link">Sign in instead</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(SessionForm);
