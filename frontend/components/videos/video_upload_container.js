import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import { fetchUser } from '../../actions/session_actions';
import VideoUpload from './video_upload';

const msp = ({ entities: { channels, users }, session: { currentUserId } }) => ({
  currentUserId,
  users,
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
  fetchUser: id => dispatch(fetchUser(id)),
});

export default connect(msp, mdp)(VideoUpload);
