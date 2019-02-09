import * as APIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

const receiveChannels = payload => ({
  type: RECEIVE_CHANNELS,
  payload,
});

const receiveChannel = payload => ({
  type: RECEIVE_CHANNEL,
  payload,
});

const removeChannel = id => ({
  type: REMOVE_CHANNEL,
  id,
});

const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors,
});

export const fetchChannels = filters => dispatch => (
  APIUtil.fetchChannels(filters).then(
    payload => dispatch(receiveChannels(payload)),
    errors => dispatch(receiveChannelErrors(errors.responseJSON))
  )
);

export const fetchChannel = id => dispatch => (
  APIUtil.fetchChannel(id).then(
    payload => dispatch(receiveChannel(payload)),
    errors => dispatch(receiveChannelErrors(errors.responseJSON))
  )
);

export const createChannel = (channel, history) => dispatch => (
  APIUtil.createChannel(channel).then(
    payload => {
      dispatch(receiveChannel(payload));
      history.push(`/channels/${payload.channel.id}`);
    },
    errors => dispatch(receiveChannelErrors(errors.responseJSON))
  )
);

export const updateChannel = (channel, history) => dispatch => (
  APIUtil.updateChannel(channel).then(
    payload => {
      dispatch(receiveChannel(payload));
      history.push(`/channels/${payload.channel.id}`);
    },
    errors => dispatch(receiveChannelErrors(errors.responseJSON))
  )
);

export const deleteChannel = (id, history) => dispatch => (
  APIUtil.deleteChannel(id).then(
    id => {
      dispatch(removeChannel(id));
      history.push("/");
    },
    errors => dispatch(receiveChannelErrors(errors.responseJSON))
  )
);
