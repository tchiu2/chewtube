import * as APIUtil from '../util/video_api_util';

export const CREATE_VIDEO = 'CREATE_VIDEO';

const receiveVideo = video => ({
  type: CREATE_VIDEO,
  video,
});

export const createVideo = video => dispatch => (
  APIUtil.upload(video).then(video => (
    dispatch(receiveVideo(video))
  ))
);
