import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import SearchResults from './search_results';

const msp = ({ entities: { videos, channels } }) => ({
  videos: Object.values(videos),
  channels,
});

const mdp = {
  fetchVideos,
}

export default connect(msp, mdp)(SearchResults);
