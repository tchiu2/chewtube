import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(e) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return(
      <div className="navbar-card">
        <button className="navbar-icon" onClick={this.showMenu}>
          {this.props.user.username.slice(0,1)} 
        </button>

      {
        this.state.showMenu
          ? (
            <div 
              className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
					    <button className="navbar-card-item" onClick={this.props.logout}>Log out</button>
					    <button className="navbar-card-item" onClick={this.props.logout}>Log out</button>
					    <button className="navbar-card-item" onClick={this.props.logout}>Log out</button>
            </div>
          ) : (
            null
          )
      }
      </div>
    );
  }
}

export default Card;
