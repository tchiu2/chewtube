import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => (
  <div>
    <h2 className="header-logo">chewtube</h2>
    <div className="header-search-container">
      <div className="header-search-input-container">
        <input type="text" placeholder="Search"/>
      </div>
    </div>
    <div>
      {currentUser === undefined ? (
        <Link to='/login'>Sign In</Link>
      ) : ( 
        <div>{currentUser.username}</div>
      )}
    </div>
  </div>
);

export default NavBar;
