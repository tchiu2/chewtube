import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(e) {
    this.player.paused ? this.player.play() : this.player.pause(); 
  }

  render() {
    return (
      <div className="video-content-container">
        <video controls autoPlay
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
