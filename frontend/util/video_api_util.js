export const upload = video => {  
  return $.ajax({
    method: 'POST',
    url: 'api/videos',
    data: video,
    contentType: false,
    processData: false,
  })
};
