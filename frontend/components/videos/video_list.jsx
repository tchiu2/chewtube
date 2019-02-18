import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 12
    };

    this.loadMore = this.loadMore.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (this.props.loadType === "scroll") {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (this.props.loadType === "scroll") {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  
  handleScroll(e) {
    const last = document.querySelector("ul.video-list > a:last-child");
    const lastOffset = last.offsetTop + last.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastOffset) {
      this.loadMore();
    }
  }


  loadMore() {
    this.setState({
      limit: this.state.limit + 6
    });
  }

  render() {
    const { className, channels, title, videos, forChannel, loadType } = this.props;
    return (
      videos.length === 0 ? null : (
      <div className={className}>
        <div className="video-list-container">
          <h1 className="list-title">{title}</h1>
          <ul className="video-list">
            {videos.slice(0,this.state.limit).map((video, idx) => (
              <VideoListItem key={idx} video={video} channel={channels[video.channelId]} forChannel={forChannel} />
            ))}
          </ul>
          {
            (loadType === "click" && videos.length > this.state.limit) ?   
              (
                <a className="show-more" href="#" onClick={this.loadMore}>Show More</a>
              ) : null
            
          }
        </div>
      </div>
      )
    );
  }
}

VideoList.defaultProps = {
  videos: [],
  channels: {},
};

export default VideoList;
