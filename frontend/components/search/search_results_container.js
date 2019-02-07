import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import SearchResults from './search_results';

const msp = ({ entities: { videos, users } }) => ({
  videos: Object.values(videos),
  users,
});

const mdp = {
  fetchVideos,
}

export default connect(msp, mdp)(SearchResults);
