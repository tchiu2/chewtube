import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class VideoOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
    };

    this.nextVideo = document.querySelector('.video-list .video-list-item:first-child')

    this.startTimer = this.startTimer.bind(this);
    this.queueNext = this.queueNext.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.overlay.style.backgroundImage = `url(${this.props.nextVideo.thumbUrl})`;
    this.queueNext();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearInterval(this.interval);
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 0.1 });
      console.log(this.state.elapsedTime);
    }, 100);
  }

  queueNext() {
    this.startTimer();
    this.timer = setTimeout(() => {
      this.props.toggleOverlay({ showOverlay: false });
      this.nextVideo.click()
      clearInterval(this.interval);
    }, 8000);
  }

	handleClick(e) {
    e.preventDefault();
    clearTimeout(this.timer); 
    clearInterval(this.interval);
    this.props.toggleOverlay({ showOverlay: false });
    this.nextVideo.click();
  }

  handleCancel(e) {
    e.preventDefault();
    clearTimeout(this.timer); 
    clearInterval(this.interval);
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
        <div className="overlay-countdown">
          <button className="overlay-next" onClick={this.handleClick}>
            <i className="fas fa-step-forward"></i>
          </button>
          <CircularProgressbar percentage={(this.state.elapsedTime / timeout) * 100} strokeWidth={4}/>
        </div>
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
