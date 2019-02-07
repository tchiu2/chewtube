import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';
import Logo from '../logo/logo';
import SearchContainer from '../search/search_container';

const NavBar = ({ currentUser, logout }) => (
  <div className="navbar-container">
    <Link to="/"><Logo className="navbar-logo" /></Link>
    <div className="navbar-search-container">
      <SearchContainer />
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
