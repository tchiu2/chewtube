import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';
import Logo from '../logo/logo';

const NavBar = ({ currentUser, logout }) => (
  <div className="navbar-container">
    <Logo className="navbar-logo" />
    <div className="navbar-search-container">
      <div className="navbar-search-input-container">
        <input type="text" placeholder="Search"/>
      </div>
    </div>
    <div className="navbar-right-links">
       <Card 
        icon={(<i className="fas fa-video"></i>)} 
        items={[
          { label: "Upload video", link: "/upload", icon: (<i className="fab fa-youtube"></i>) } 
        ]}
       />
      
      {currentUser === undefined ? (
        <Link className="navbar-btn" to='/login'>Sign In</Link>
      ) : ( 
        <div>
          <Card user={currentUser} action={logout} />
				</div>
      )}
    </div>
  </div>
);

export default NavBar;
