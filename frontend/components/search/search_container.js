import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import Search from './search';

const mdp = {
  fetchVideos,
};

export default connect(null, mdp)(Search);
