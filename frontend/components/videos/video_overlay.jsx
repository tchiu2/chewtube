import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class VideoOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
    };

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
    this.clearTimers();
  }

  startTimer() {
    const interval = setInterval(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 0.1 });
    }, 100);
    this.setState({ interval });
  }

  clearTimers() {
    clearInterval(this.state.interval);
    clearTimeout(this.state.timer);
    this.props.toggleOverlay({ showOverlay: false });
  }

  queueNext() {
    this.startTimer();
    const timer = setTimeout(() => {
      this.clearTimers();
      this.props.playNext();
    }, this.props.timeout * 1000);
    this.setState({ timer });
  }

	handleClick(e) {
    e.preventDefault();
    this.clearTimers();
    this.props.playNext();
  }

  handleCancel(e) {
    e.preventDefault();
    this.clearTimers();
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
