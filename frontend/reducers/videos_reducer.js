import { CREATE_VIDEO } from '../actions/video_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CREATE_VIDEO:
      return { ...state, { [action.video.id]: action.video } };
    default:
      return state;
  }
};
