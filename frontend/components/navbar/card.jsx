import React, { Component } from 'react';
import CardItem from './card_item.jsx';

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
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
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
              <CardItem className="user-info-card" label={`${this.props.user.username}#${this.props.user.email}`}></CardItem>
              <CardItem label={'Sign out'} action={this.props.logout} />
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