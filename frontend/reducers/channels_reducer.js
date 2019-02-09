import {
  RECEIVE_CHANNEL,
  RECEIVE_CHANNELS,
  REMOVE_CHANNEL } from '../actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return { ...action.payload.channels };
    case RECEIVE_CHANNEL:
      return { ...state, [action.payload.channel.id]: action.payload.channel };
    case REMOVE_CHANNEL:
      const newState = { ...state };
      delete(newState[action.id]);
      return newState;
    default:
      return state;
  }
};
