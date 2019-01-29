import React, { Component } from 'react';
import CardItem from './card_item.jsx';
import UserIcon from '../icons/user_icon';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeMenu);
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
        <UserIcon 
          user={this.props.user}
          className="navbar-icon"
          icon={this.props.icon}
          onClick={this.showMenu}
        />

      {
        this.state.showMenu
          ? (
            <div 
              className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              {this.props.user !== undefined ? 
                (
                  <div>
                    <CardItem className="user-info-card" label={`${this.props.user.username}#${this.props.user.email}`}></CardItem>
                    <div className="menu-items">
                      <CardItem label={'Sign out'} action={this.props.action} icon={(<i className="fas fa-sign-out-alt"></i>)} />
                    </div>
                  </div>
                ) : (
                  <div className="menu-items">
                    {this.props.items.map((item, idx) => 
                      <CardItem key={idx} label={item.label} link={item.link} icon={item.icon} />
                    )}
                  </div>
                )}
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
