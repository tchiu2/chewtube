import React, { Component } from 'react';
import Video from './video';
import VideoDetails from './video_details';
import CommentsSection from '../comments/comments_section';
import VideoList from './video_list';

class VideoShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextVideo: ''
    };
    this.playNext = this.playNext.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchVideos({ next: this.props.match.params.videoId });
    this.props.fetchVideo(this.props.match.params.videoId);
    this.props.view(this.props.match.params.videoId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.fetchVideos({ next: this.props.match.params.videoId });
      this.props.fetchVideo(this.props.match.params.videoId);
      this.props.view(this.props.match.params.videoId);
    }
  }

  playNext(e) {
    const nextVideo = document.querySelector('.video-list .video-list-item:first-child')
    setTimeout(() => nextVideo.click(), 3000);
  }

  render() {  
    return (this.props.video === undefined || this.props.channel === undefined) ? null : 
      (
        <div className="video-show-page-container">
          <div className="video-show-main-container">
            <Video 
              onEnded={this.playNext}
              src={this.props.video.videoUrl}
            />
            <div className="video-show-info-container">
              <VideoDetails 
                video={this.props.video} 
                session={this.props.session}
                channel={this.props.channel}
              />
            </div>
            <CommentsSection video={this.props.video} />
          </div>
          <div className="video-show-secondary-container">
            <VideoList
              className="up-next-container"
              channels={this.props.channels}
              videos={this.props.nextVideos.slice(0,6).sort(() => 0.5 - Math.random())}
              title="Up next"
            />
          </div>
        </div>
    )
  }
}
export default VideoShow;
