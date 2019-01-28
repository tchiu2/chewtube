import { connect } from 'react-redux';
import {  updateVideo } from '../../actions/video_actions';
import VideoEdit from './video_edit';

const mdp = {
  updateVideo,
};

export default connect(null, mdp)(VideoEdit);
