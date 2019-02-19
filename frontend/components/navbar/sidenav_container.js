import { connect } from 'react-redux';
import { fetchChannels } from '../../actions/channel_actions';
import SideNav from './sidenav';

const msp = ({ entities: { channels }, ui: { showNav } }) => {
  return {
    channels: Object.values(channels),
    showNav,
  }
};

const mdp = {
  fetchChannels,
}

export default connect(msp, mdp)(SideNav);
