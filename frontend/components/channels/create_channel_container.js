import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel } from '../../actions/channel_actions';

const msp = ({ session: { currentUserId } }) => {
  return {
    channel: { name: '', description: '' },
    currentUserId,
    formType: 'create',
  };
};

const mdp = (dispatch, ownProps) => ({
  processForm: channel => dispatch(createChannel(channel, ownProps.history)),
});

export default connect(msp, mdp)(ChannelForm);
