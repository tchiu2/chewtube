import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...state, [action.currentUser.id]: action.currentUser };
    case RECEIVE_VIDEOS:
      return { ...state, ...action.payload.users };
    case RECEIVE_VIDEO:
      return { ...state, ...action.payload.commentUsers, [action.payload.uploader.id]: action.payload.uploader };
    default:
      return state;
  }
};
