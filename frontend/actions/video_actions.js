import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';

const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos,
});

const receiveVideo = payload => ({
  type: RECEIVE_VIDEO,
  payload,
});

const removeVideo = id => ({
  type: REMOVE_VIDEO,
  id,
});

export const fetchVideos = () => dispatch => (
  APIUtil.fetchVideos().then(videos => (
    dispatch(receiveVideos(videos))
  ))
);

export const fetchVideo = id => dispatch => (
  APIUtil.fetchVideo(id).then(payload => (
    dispatch(receiveVideo(payload))
  ))
);

export const createVideo = video => dispatch => (
  APIUtil.createVideo(video).then(payload => (
    dispatch(receiveVideo(payload))
  ))
);

export const updateVideo = video => dispatch => (
  APIUtil.updateVideo(video).then(payload => (
    dispatch(receiveVideo(payload))
  ))
);

export const deleteVideo = id => dispatch => (
  APIUtil.deleteVideo(id).then(video => (
    dispatch(removeVideo(video.id))
  ))
);
