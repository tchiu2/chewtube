import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import ChannelIcon from '../icons/channel_icon';
import ChannelVideos from './channel_videos';
import ChannelAbout from './channel_about';
import ChannelHome from './channel_home';

class Channel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchChannel(this.props.match.params.channelId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
      window.scrollTo(0, 0);
      this.props.fetchChannel(this.props.match.params.channelId);
    }
  }

  render() {
    const { channel, currentUserId } = this.props;
    const channelId = this.props.match.params.channelId;
    return channel === undefined ? null : (
      <div className="channel-container">
        <div className="channel-header-container">
          <div className="channel-header">
            <div className="channel-title">
              <ChannelIcon 
                channel={channel}
              />
              <h2>{channel.name}</h2> 
            </div>
            <div className="channel-header-links">
              <NavLink exact to={`/channels/${channelId}/`} activeClassName="selected">Videos</NavLink>
              <NavLink exact to={`/channels/${channelId}/about`} activeClassName="selected">About</NavLink>
            </div>
          </div>
        </div>
        <div className="channel-content">
          <Switch>
            <Route 
              path="/channels/:channelId/" 
              render={() => <ChannelVideos {...this.props} />}
            />
            <Route 
              path="/channels/:channelId/about" 
              render={() => <ChannelAbout {...this.props} />}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Channel;
