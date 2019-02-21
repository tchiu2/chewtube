import React, { Component } from 'react';

class VideoOverlay extends Component {
  constructor(props) {
    super(props);
    this.queueNext = this.queueNext.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.overlay.style.backgroundImage = `url(${this.props.nextVideo.thumbUrl})`;
    this.queueNext();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  queueNext() {
    const nextVideo = document.querySelector('.video-list .video-list-item:first-child')
    this.timer = setTimeout(() => {
      this.props.toggleOverlay({ showOverlay: false });
      nextVideo.click()
    }, 8000);
  }

  handleCancel(e) {
    e.preventDefault();
    clearTimeout(this.timer); 
    this.props.toggleOverlay({ showOverlay: false });
  }
  
  render() {
    const { nextVideo, timeout } = this.props;
    return (
      <div ref={node => this.overlay = node} className="video-overlay">
        <div className="overlay-background"></div>
        <div className="overlay-heading">Up next</div>
        <div className="overlay-video-title">{nextVideo.title}</div>
        <div className="overlay-channel-name">{nextVideo.channel}</div>
        <button className="overlay-cancel" onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }
}

VideoOverlay.defaultProps = {
  nextVideo: {
    title: '',
    thumbUrl: '',
    channel: '',
  }
}

export default VideoOverlay;
