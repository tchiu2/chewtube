import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';

const receiveVideos = payload => ({
  type: RECEIVE_VIDEOS,
  payload,
});

const receiveVideo = payload => ({
  type: RECEIVE_VIDEO,
  payload,
});

const removeVideo = id => ({
  type: REMOVE_VIDEO,
  id,
});

export const clearVideos = () => ({
  type: CLEAR_VIDEOS,
});

const receiveVideoErrors = errors => ({
  type: RECEIVE_VIDEO_ERRORS,
  errors,
});

export const fetchVideos = filters => dispatch => (
  APIUtil.fetchVideos(filters).then(
    payload => dispatch(receiveVideos(payload)),
    errors => dispatch(receiveVideoErrors(errors))
  )
);

export const fetchVideo = id => dispatch => (
  APIUtil.fetchVideo(id).then(
    payload => dispatch(receiveVideo(payload)),
    errors => dispatch(receiveVideoErrors(errors.responseJSON))   
  )
);

export const createVideo = (video, history) => dispatch => (
  APIUtil.createVideo(video).then(
    payload => { 
      dispatch(receiveVideo(payload));
      history.push(`/videos/${payload.video.id}`);
    },
    errors => dispatch(receiveVideoErrors(errors.responseJSON))
  )
);

export const updateVideo = (video, history) => dispatch => (
  APIUtil.updateVideo(video).then(
    payload => {
      dispatch(receiveVideo(payload));
      history.push(`/videos/${payload.video.id}`);
    },
    errors => dispatch(receiveVideoErrors(errors.responseJSON))
  )
);

export const deleteVideo = (id, history) => dispatch => (
  APIUtil.deleteVideo(id).then(
    id => {
      dispatch(removeVideo(id));
      history.push("/");
    },
    errors => dispatch(receiveVideoErrors(errors.responseJSON))
  )
);
