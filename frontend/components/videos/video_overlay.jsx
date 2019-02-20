import React, { Component } from 'react';

class VideoOverlay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.overlay.style.backgroundImage = `url(${this.props.nextVideo.thumbUrl})`;
    debugger
  }
  
  render() {
    const { nextVideo, timeout } = this.props;
    return (
      <div ref={node => this.overlay = node}className="video-overlay">
        <div className="overlay-background">
          <div className="overlay-heading">Up next</div>
          <div className="overlay-video-title">{nextVideo.title}</div>
          <button className="overlay-cancel">Cancel</button>
        </div>
      </div>
    );
  }
}

VideoOverlay.defaultProps = {
  nextVideo: {
    title: '',
    thumbUrl: '',
    channelId: '',
  }
}

export default VideoOverlay;
