export const view = videoId => {
  return $.ajax({
    method: 'POST',
    url: `api/videos/${videoId}/views`,
  });
};
