import React, { Component } from 'react';
import CardItem from './card_item';
import ChannelIcon from '../icons/channel_icon';

class SideNav extends Component {
  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const { channels, showNav } = this.props;
    let classes = ["sidenav-container"]
    classes.push(showNav ? "opened" : "closed");

    const channelList = channels.map(channel => (
      <CardItem key={channel.id} className="sidenav-channel-item" label={channel.name} link={`/channels/${channel.id}`} />
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
