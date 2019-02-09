import { combineReducers } from 'redux';
import users from './users_reducer';
import channels from './channels_reducer';
import videos from './videos_reducer';
import comments from './comments_reducer';
import likes from './likes_reducer';

export default combineReducers({
  users,
  channels,
  videos,
  comments,
  likes,
});
