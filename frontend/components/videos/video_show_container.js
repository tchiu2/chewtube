import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import { view } from '../../actions/view_actions';
import VideoShow from './video_show';

const msp = ({ entities: { videos, users }, session }, ownProps) => {
  const video = videos[ownProps.match.params.videoId];
  const user = video === undefined ? { username: "" } : users[video.uploaderId];
  return { 
    video,
    user,
    session,
  };
};

const mdp = {
  fetchVideo,
  view,
};

export default connect(msp, mdp)(VideoShow);
