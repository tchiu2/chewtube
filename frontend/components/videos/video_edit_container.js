import { connect } from 'react-redux';
import { 
  fetchVideo,
  updateVideo,
  deleteVideo } from '../../actions/video_actions';
import VideoEdit from './video_edit';

const msp = ({ entities: { videos } }) => ({
  videos,
});

const mdp = {
  fetchVideo,
  updateVideo,
  deleteVideo,
};

export default connect(msp, mdp)(VideoEdit);
