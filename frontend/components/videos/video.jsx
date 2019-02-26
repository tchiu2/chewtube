import React, { Component } from 'react';
import VideoOverlay from './video_overlay';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showControls: false,
      ended: false,
    };

    this.showControls = this.showControls.bind(this);
    this.hideControls = this.hideControls.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
  }

  showControls(e) {
    this.setState({ showControls: true });
  }

  hideControls(e) {
    this.setState({ showControls: false });
  }

  handleEnded(e) {
    this.props.toggleOverlay({ showOverlay: true });
  }

  render() {
    return (
      <div className="video-content-container">
        {this.props.showOverlay ? (
          <VideoOverlay
            playNext={this.props.playNext}
            nextVideo={this.props.nextVideo}
            toggleOverlay={this.props.toggleOverlay}
            timeout={8}
          />
        ) : null }
        <video autoPlay
            controls={this.state.showControls ? "controls" : ""}
            onEnded={this.handleEnded}
            onMouseEnter={this.showControls}
            onMouseLeave={this.hideControls}
            ref={node => this.player = node}
            id="video-content"
            src={this.props.src} 
        />
      </div>
    )
  }
};

export default Video;
