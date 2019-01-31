import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like,
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like,
});

export const like = likeableObj => dispatch => (
  APIUtil.like(likeableObj).then(like =>
    dispatch(receiveLike(like))
  )
);

export const unlike = likeableObj => dispatch => (
  APIUtil.unlike(likeableObj).then(like =>
    dispatch(removeLike(like))
  )
);
