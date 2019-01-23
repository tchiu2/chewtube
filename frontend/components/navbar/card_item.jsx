import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default ({ label, action, className }) => (
  <div className={`navbar-card-item ${className}`} onClick={action !== undefined ? action : () => null}>
    <button className="navbar-card-icon">
      {label.slice(0,1)} 
    </button>
    <div className="navbar-card-item-label">
      {label.split('#').map((row, idx) => <div key={idx}> {row}</div>)}
    </div>
  </div>
);
