import * as APIUtil from '../util/view_api_util';

export const RECEIVE_VIEW = 'RECEIVE_VIEW';

const receiveView = view => ({
  type: RECEIVE_VIEW,
  view,
});

export const view = videoId => dispatch => (
  APIUtil.view(videoId).then(view =>
    dispatch(receiveView(view))
  )
);
