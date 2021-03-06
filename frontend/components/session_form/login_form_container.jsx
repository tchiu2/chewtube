import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const msp = ({ errors: { session }}) => {
  return {
    user: { userOrEmail: '', password: '' },
    errors: session,
    formType: 'login',
    navLink: <Link to="/signup" className="session-form-link">Create account</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(SessionForm);
