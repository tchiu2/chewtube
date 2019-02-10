export const getChannelVideos = (state, channel) => {
  return channel !== undefined 
    ? Object.values(state.entities.videos).filter(video => channel.id === video.channelId)
    : [];
}
