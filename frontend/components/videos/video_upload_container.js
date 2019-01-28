import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import VideoUpload from './video_upload';

const msp = ({ session: { currentUserId } }) => ({
  currentUserId,
  video: { 
    title: '',
    description: '', 
    videoFile: '', 
    thumbnail: '',
    videoUrl: '',
  },
});

const mdp = (dispatch, ownProps) => ({
  upload: video => dispatch(createVideo(video, ownProps.history)),
});

export default connect(msp, mdp)(VideoUpload);
