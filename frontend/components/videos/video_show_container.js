import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import { view } from '../../actions/view_actions';
import VideoShow from './video_show';

const msp = ({ entities: { videos, channels }, session }, ownProps) => {
  const video = videos[ownProps.match.params.videoId];
  const channel = video === undefined ? { name: "" } : channels[video.channelId];
  return { 
    video,
    channel,
    session,
  };
};

const mdp = {
  fetchVideo,
  view,
};

export default connect(msp, mdp)(VideoShow);
