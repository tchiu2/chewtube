import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';

const Main = () => (
  <div>
    <header>
      <NavBarContainer /> 
    </header>
  </div>
);

export default Main;
