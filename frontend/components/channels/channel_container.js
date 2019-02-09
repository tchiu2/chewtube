import { connect } from 'react-redux';
import { fetchChannel } from '../../actions/channel_actions';
import Channel from './channel';

const msp = ({ entities: { channels }, session: { currentUserId} }, ownProps) => {
  const channel = channels[ownProps.match.params.channelId];
  return {
    channel,
    currentUserId,
  };
};

const mdp = {
  fetchChannel,
};

export default connect(msp, mdp)(Channel);
