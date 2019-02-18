import React from 'react';
import VideoList from '../videos/video_list';

const ChannelVideos = ({ channel, videos }) => (
  <VideoList 
    videos={videos}
    channels={[channel]}
    loadType="scroll"
    title="Uploads"
    className="channel-uploads"
    forChannel="true"
  />
);

export default ChannelVideos;
