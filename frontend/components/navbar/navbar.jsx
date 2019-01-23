import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';

const NavBar = ({ currentUser, logout }) => (
  <div className="navbar-container">
    <h1 className="navbar-logo">chewtube</h1>
    <div className="navbar-search-container">
      <div className="navbar-search-input-container">
        <input type="text" placeholder="Search"/>
      </div>
    </div>
    <div>
      {currentUser === undefined ? (
        <Link className="navbar-btn" to='/login'>Sign In</Link>
      ) : ( 
        <div>
          <Card user={currentUser} logout={logout} />
				</div>
      )}
    </div>
  </div>
);

export default NavBar;
