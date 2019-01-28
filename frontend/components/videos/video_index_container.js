import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions'; 

const msp = ({ entities: { videos, users }}) => {
  const indexVideos = Object.values(videos);
  return {
    videos: indexVideos,
    users,
  };
}

const mdp = {
  fetchVideos,
}

export default connect(msp, mdp)(VideoIndex);
