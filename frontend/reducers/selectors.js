export const getChannelVideos = (state, channel) => {
  return Object.values(state.entities.videos).filter(video => channel.videoIds.includes(video.id)) || [];
}
