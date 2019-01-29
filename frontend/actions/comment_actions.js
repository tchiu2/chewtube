import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = payload => ({
  type: RECEIVE_COMMENT,
  payload,
});

const removeComment = id => ({
  type: REMOVE_COMMENT,
  id,
});

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(
    payload => dispatch(receiveComment(payload))
  )
);

export const deleteComment = id => dispatch => (
  APIUtil.deleteComment(id).then(
    id => dispatch(removeVideo(id))
  )
);
