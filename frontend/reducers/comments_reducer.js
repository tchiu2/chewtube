import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comment_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO:
      return { ...action.payload.comments };
    case RECEIVE_COMMENT:
      return { ...state, [action.payload.comment.id]: action.payload.comment }; 
    case REMOVE_COMMENT:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
