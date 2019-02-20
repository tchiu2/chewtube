import React, { Component } from 'react';
import Video from './video';
import VideoDetails from './video_details';
import CommentsSection from '../comments/comments_section';
import VideoList from './video_list';

class VideoShow extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.clearVideos();
    this.props.fetchVideos({ next: this.props.match.params.videoId });
    this.props.fetchVideo(this.props.match.params.videoId);
    this.props.view(this.props.match.params.videoId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.clearVideos();
      this.props.fetchVideos({ next: this.props.match.params.videoId });
      this.props.fetchVideo(this.props.match.params.videoId);
      this.props.view(this.props.match.params.videoId);
    }
  }

  render() {  
    return (this.props.video === undefined || this.props.channel === undefined) ? null : 
      (
        <div className="video-show-page-container">
          <div className="video-show-main-container">
            <Video 
              onEnded={this.playNext}
              src={this.props.video.videoUrl}
              nextVideo={this.props.nextVideos[0]}
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
              videos={this.props.nextVideos}
              title="Up next"
            />
          </div>
        </div>
    )
  }
}

export default VideoShow;
