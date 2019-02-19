import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default ({ type, label, action, className, link, icon }) => (
  type === "external"
  ? <a href={link}>
      <div className="navbar-card-item">
        <button className="navbar-card-icon">{icon}</button>
        <div className="navbar-card-item-label">{label}</div> 
      </div>
    </a>
  : <Link to={link !== undefined ? link : ""}>
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
