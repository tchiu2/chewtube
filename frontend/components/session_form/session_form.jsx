import React, { Component } from 'react';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
    this.loginAsGuestHelper = this.loginAsGuestHelper.bind(this);
    this.userInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({ ...this.state });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  loginAsGuest(e) {
    e.preventDefault();
    const userOrEmail = 'demouser@gmail.com'.split('');
    const password = 'password'.split('');
    const submit = document.getElementById('session-submit');
    this.setState({userOrEmail: '', password: ''}, () => 
      this.loginAsGuestHelper(userOrEmail, password, submit)
    );
  }

  loginAsGuestHelper(userOrEmail, password, submit) {
    if (userOrEmail.length > 0) {
      this.userInput.current.focus();
      this.setState(
        { userOrEmail: this.state.userOrEmail + userOrEmail.shift() }, () => {
          window.setTimeout(() => this.loginAsGuestHelper(userOrEmail, password, submit), 50);
        }
      );
    } else if (password.length > 0) {
      this.passwordInput.current.focus();
      this.setState(
        { password: this.state.password + password.shift() }, () => {
          window.setTimeout(() => this.loginAsGuestHelper(userOrEmail, password, submit), 75);
        }
      );
    } else {
      submit.click();
    }
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <Link to="/"><Logo className="session-form-logo" /></Link>
          <div className="session-form-heading-container">
            <h1 className="session-form-heading">{this.props.formType === 'signup' ? "Create your account" : "Sign in"}</h1>
            <div className="session-form-heading-subtext">to continue to ChewTube</div>
          </div>

          <div className="session-form-input-container">
            <div className="session-form-input-field">
              <input 
               className="session-form-input" 
               required
               id="username"
               ref={this.userInput}
               type="text" 
               onChange={this.update((this.props.formType === 'signup' ? "username" : "userOrEmail"))}
               value={this.props.formType === 'signup' ? this.state.username : this.state.userOrEmail} 
               placeholder={this.props.formType === 'signup' ? 'Username' : 'Username or email'}/>
              <label className="session-form-input-label" htmlFor="username">{this.props.formType === 'signup' ? 'Username' : 'Username or email'}</label>
            </div>
     
            <div className="session-form-input-field"
             hidden={this.props.formType === 'signup' ? "" : "hidden"}>
              <input className="session-form-input" 
               id="email"
				       required={this.props.formType === 'signup' ? 'required' : ''}
               type="text" 
               onChange={this.update('email')} 
               value={this.state.email} 
               placeholder="Email"/> 
              <label className="session-form-input-label" htmlFor="email">Email</label>
            </div>

            <div className="session-form-input-field">
              <input 
               required
               id="password"
               ref={this.passwordInput}
               className="session-form-input"
               type="password" 
               onChange={this.update('password')}
               value={this.state.password} 
               placeholder="Password"/>
              <label className="session-form-input-label" htmlFor="password">Password</label>
            </div>
          </div>
          
          <div className="session-form-errors-container">
            <div className="session-form-errors">
              {this.props.errors.length > 0 ? (<div className="session-form-error-msg">{this.props.errors[0]}</div>) : ''}
            </div>
          </div>

          <div className="session-form-guest-login-container">
          </div>
          
          <div className="session-form-links-container">
            <p>
              {this.props.navLink}
              {
                this.props.formType === 'signup' ? ( "" ) : (
                  <>
                    or
                    <a className="session-form-link" onClick={this.loginAsGuest}>Sign in as guest</a>
                  </>
                )
              }
            </p>
            <button id="session-submit" className="session-form-btn">{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
