import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default ({ label, action, className, link, icon }) => (
  <Link to={link !== undefined ? link : ""}>
    <div className={`navbar-card-item ${className ? className : ""}`} onClick={action !== undefined ? action : () => null}>
        <button className="navbar-card-icon">
          {icon === undefined ? label.slice(0,1) : icon} 
        </button>
        <div className="navbar-card-item-label">
          {label.split('#').map((row, idx) => <div key={idx}> {row}</div>)}
        </div>
    </div>
  </Link>
);
