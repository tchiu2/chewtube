import React, { Component } from 'react';
import VideoOverlay from './video_overlay';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showControls: false,
      ended: false,
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.showControls = this.showControls.bind(this);
    this.hideControls = this.hideControls.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
  }

  togglePlay(e) {
    this.player.paused ? this.player.play() : this.player.pause(); 
  }

  showControls(e) {
    this.setState({ 
      showControls: true,
    });
  }

  hideControls(e) {
    this.setState({ 
      showControls: false,
    });
  }

  handlePlay(e) {
    this.setState({
      ended: false,
    });
  }

  handleEnded(e) {
    this.setState({
      ended: true,
    }, e => {
      const nextVideo = document.querySelector('.video-list .video-list-item:first-child')
      setTimeout(() => nextVideo.click(), 8000);
    });
  }

  render() {
    return (
      <div className="video-content-container">
        {this.state.ended ? (
          <VideoOverlay
            nextVideo={this.props.nextVideo}
            timeout={3}
          />
        ) : null }
        <video autoPlay
            controls={this.state.showControls ? "controls" : ""}
            onMouseEnter={this.showControls}
            onMouseLeave={this.hideControls}
            onClick={this.togglePlay}
            ref={node => this.player = node}
            id="video-content"
            src={this.props.src} 
        />
      </div>
    )
  }
};

export default Video;
