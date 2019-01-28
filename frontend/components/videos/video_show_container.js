import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const msp = ({ entities: { videos, users }}, ownProps) => {
  const video = videos[ownProps.match.params.videoId];
  const user = video === undefined ? { username: "" } : users[video.uploaderId];
  return { 
    video,
    user,
      //  video: { 
      //    title: "Testing", 
      //    description: "Description goes here", 
      //    uploaderId: 11, 
      //    createdAt: "2019-01-25T19:35:42.005Z",
      //    videoUrl:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
      //    thumbUrl:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
      //  },
  };
};

const mdp = {
  fetchVideo
};

export default connect(msp, mdp)(VideoShow);
