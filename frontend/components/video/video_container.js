import { connect } from 'react-redux';

import Video from './video';

const msp = (state) => {
  return {
    src:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
  };
};

export default connect(msp)(Video);
