import { connect } from 'react-redux';
import { fetchVideos, clearVideos } from '../../actions/video_actions';
import Search from './search';

const mdp = {
  fetchVideos,
  clearVideos,
};

export default connect(null, mdp)(Search);
