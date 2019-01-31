import { 
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from '../actions/like_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE:
      return { ...state, [action.like.id]: action.like };
    case REMOVE_LIKE:
      const newState = { ...state };
      delete newState[action.like.id];
      return newState;
    case RECEIVE_VIDEO:
      return { ...state, ...action.payload.likes, ...action.payload.commentLikes };
    default:
      return state;
  }
};
