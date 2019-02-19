import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';
import Logo from '../logo/logo';
import SideNav from './sidenav';
import SearchContainer from '../search/search_container';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: true,
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      showNav: !this.state.showNav,
    });
    console.log(this.state.showNav);
  }
  
  render() {
    const { currentUser, logout } = this.props;
    return (
      <div className="navbar-container">
        <div className="navbar-left-links">
          <button onClick={this.handleToggle} className="navbar-icon">
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/"><Logo className="navbar-logo" /></Link>
        </div>
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
  }
}

export default NavBar;
