import { connect } from 'react-redux';
import { fetchVideo, fetchVideos, clearVideos } from '../../actions/video_actions';
import { view } from '../../actions/view_actions';
import { toggleOverlay } from '../../actions/ui_actions';
import VideoShow from './video_show';

const msp = ({ entities: { videos, channels }, session, ui: { showOverlay } }, ownProps) => {
  const video = videos[ownProps.match.params.videoId];
  const channel = video === undefined ? { name: "" } : channels[video.channelId];
  const nextVideos = Object.values(videos).filter(video => video.id !== parseInt(ownProps.match.params.videoId));
  return { 
    video,
    channel,
    session,
    channels,
    nextVideos,
    showOverlay,
  };
};

const mdp = {
  fetchVideo,
  fetchVideos,
  clearVideos,
  view,
  toggleOverlay,
};

export default connect(msp, mdp)(VideoShow);
