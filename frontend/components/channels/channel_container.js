import { connect } from 'react-redux';
import { fetchChannel } from '../../actions/channel_actions';
import { getChannelVideos } from '../../reducers/selectors';
import Channel from './channel';

const msp = (state, ownProps) => {
  const channel = state.entities.channels[ownProps.match.params.channelId];
  return {
    channel,
    videos: getChannelVideos(state, channel),
    currentUserId: state.session.currentUserId,
  };
};

const mdp = {
  fetchChannel,
};

export default connect(msp, mdp)(Channel);
