import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showControls: false,
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.showControls = this.showControls.bind(this);
    this.hideControls = this.hideControls.bind(this);
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

  render() {
    return (
      <div className="video-content-container">
        <video autoPlay
            controls={this.state.showControls ? "controls" : ""}
            onEnded={this.props.onEnded}
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
