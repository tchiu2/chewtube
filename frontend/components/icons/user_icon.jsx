import React from 'react';

const UserIcon = ({ icon, user, className, onClick }) => (
  <button className={`${className === undefined ? "" : className} ${icon === undefined ? "user-icon" : ""}`}
    onClick={onClick !== undefined ? onClick : e => e.preventDefault()}>
    {icon !== undefined ? (
        icon 
      ) : (
        user.username.slice(0,1)
      )
    } 
  </button>
);

export default UserIcon;
