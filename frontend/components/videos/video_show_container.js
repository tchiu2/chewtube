import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const msp = ({ entities: { videos, users }}, ownProps) => {
  const video = videos[ownProps.match.params.videoId];
  const user = video === undefined ? { username: "" } : users[video.uploaderId];
  return { 
    video,
    user,
  };
};

const mdp = {
  fetchVideo
};

export default connect(msp, mdp)(VideoShow);
