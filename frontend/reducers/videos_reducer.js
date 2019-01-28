import { 
  RECEIVE_VIDEO,
  RECEIVE_VIDEOS,
  REMOVE_VIDEO } from '../actions/video_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      return { ...state, [action.payload.video.id]: action.payload.video };
    case REMOVE_VIDEO:
      const newState = { ...state };
      delete(newState[action.id]);
      return newState;
    default:
      return state;
  }
};
