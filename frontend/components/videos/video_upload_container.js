import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import VideoUpload from './video_upload';

const msp = ({ session: { currentUserId } }) => ({
  currentUserId,
  video: { 
    title: '',
    description: '', 
    videoFile: '', 
    thumbnail: ''
  },
});

const mdp = dispatch => ({
  upload: video => dispatch(createVideo(video)),
});

export default connect(msp, mdp)(VideoUpload);
