import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions'; 

const msp = ({ entities: { videos, channels }}) => {
  const indexVideos = Object.values(videos);
  return {
    videos: indexVideos,
    channels,
  };
}

const mdp = {
  fetchVideos,
}

export default connect(msp, mdp)(VideoIndex);
