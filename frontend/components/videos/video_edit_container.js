import { connect } from 'react-redux';
import { updateVideo, deleteVideo } from '../../actions/video_actions';
import VideoEdit from './video_edit';

const mdp = {
  updateVideo,
  deleteVideo,
};

export default connect(null, mdp)(VideoEdit);
