export const upload = video => {  
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/videos',
    data: video,
    contentType: false,
    processData: false,
  })
};
