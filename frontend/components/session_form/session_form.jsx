import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form-logo">chewtube</div>
          <h1 className="login-form-heading">{this.props.formType === 'signup' ? "Sign up" : "Sign in"}</h1>
          <div className="login-form-heading-subtext">to continue to chewtube</div>

          <input 
           className="login-form-input" 
           type="text" 
           onChange={this.update((this.props.formType === 'signup' ? "username" : "userOrEmail"))}
           value={this.state.username} 
           placeholder={this.props.formType === 'signup' ? 'Username' : 'Username/Email'}/>

          {this.props.formType === 'signup' ? (
            <input className="login-form-input" 
             type="text" 
             onChange={this.update('email')} 
             value={this.state.email} 
             placeholder="Email"/>) : ""}

          <input 
           className="login-form-input"
           type="password" 
           onChange={this.update('password')}
           value={this.state.password} 
           placeholder="Password"/>
      
          <button className="login-form-btn">Submit</button>
          {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default SessionForm;
