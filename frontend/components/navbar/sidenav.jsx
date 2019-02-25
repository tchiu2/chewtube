import React, { Component } from 'react';
import CardItem from './card_item';
import ChannelIcon from '../icons/channel_icon';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(this.props.fetchChannels, 0);
  }

  render() {
    const { channels, showNav } = this.props;
    let classes = ["sidenav-container"]
    classes.push(showNav ? "opened" : "closed");

    const channelList = channels.map(channel => (
      <CardItem 
        key={channel.id} 
        className="sidenav-channel-item" 
        label={channel.name}
        link={`/channels/${channel.id}`} />
      ));

    return (
      <>
        <div className={classes.join(" ")}>
          <div className="sidenav-section">
            <CardItem label="Home" link="/" icon={(<i className="fas fa-home"></i>)}/>
          </div>
          <div className="sidenav-section">
            <div className="sidenav-section-title">Popular Channels</div>
            {channelList}
          </div>
          <div className="sidenav-section">
            <div className="sidenav-section-title">Contact</div>
            <CardItem 
              label="Github"
              link="https://github.com/tchiu2/chewtube"
              type="external" 
              icon={(<i className="fab fa-github"></i>)}/>
            <CardItem 
              label="LinkedIn"
              link="https://www.linkedin.com/in/terence-chiu-ba9b2841/"
              type="external"
              icon={(<i className="fab fa-linkedin"></i>)}/>
            <CardItem 
              label="Portfolio" 
              link="https://terencechiu.me" 
              type="external" 
              icon={(<i className="fas fa-user-circle"></i>)}/>
          </div>
        </div>
      </>
    )
  }
}

SideNav.defaultProps = {
  channels: [],
  showNav: true,
};

export default SideNav;
