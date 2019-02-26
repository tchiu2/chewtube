# ChewTube
[ChewTube](http://chewtube.herokuapp.com) is a web application for uploading and viewing videos, inspired by YouTube. It also supports many of the core features of YouTube, such as user authentication, user channels as well as comments, likes and views for videos.

## Technologies
ChewTube was built using the following technologies:
- Ruby on Rails
- React
- Redux
- JavaScript
- PostgreSQL
- Amazon Web Services (AWS) S3

## Features

### Automatic thumbnail generation
To provide a more intuitive user experience, I chose to have the video upload functionality automatically handle thumbnail generation instead of prompting users to choose 2 files. 

This was implemented using a combination of the FileReader and Canvas APIs. The file input field has an `onchange` event listener that parses the file input using FileReader `readAsDataUrl` function. The result gets stored in the component state and rendered on the form as a preview. When the form is submitted, a thumbnail image is created by using the Canvas `drawImage` function, converted into the appropriate format and attached to the FormData object that is sent in the request. To preserve space, the image is compressed, but retains the original video aspect ratio.

```javascript

// draw first frame of video to canvas and extract data url
generateThumbnail(video) {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth / 3;
  canvas.height = video.videoHeight / 3;
  canvas.getContext("2d").drawImage(
     video, 
     0,
     0,
     video.videoWidth,
     video.videoHeight,
     0, 
     0, 
     canvas.width, 
     canvas.height);
  return canvas.toDataURL("image/png", 0.5); 
}

// convert data url to File object that can be stored/accessed in AWS S3
dataURLtoFile(dataurl, filename) {
  let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}


handleSubmit(e) {
  // handle creating formData object and appending other info
  
  const thumbUrl = this.generateThumbnail(document.getElementById('video'));
  const thumbnail = this.dataURLtoFile(thumbUrl, `${this.state.title}_thumb.png`);
  
  formData.append('video[thumbnail]', thumbnail);
  formData.append('video[video]', this.state.videoFile);
  
  // finalize formData object and send request
}
```

### Video up next
When a video finishes playing, the first video in the up next section will be queued and played after a specified timeout. Users can cancel the action or go to the next video early via controls displayed on the video player.

The next video thumbnail is displayed in the player along with the title and channel name. The up next queue is currently just random videos (excluding the current video), but will be enhanced to handle playlists as well as provide "smarter" suggestions. Managing the JavaScript timing events correctly in the overlay React component was key in implementing this functionality - specifically this meant clearing any timeouts or intervals used by the component in the event that it was dismounted to prevent memory leaks.

![upnext](https://i.imgur.com/VfbhfKw.gif)

## Planned work
While much of the basic functionality is already available, here are some features I plan to implement for a more robust experience:
- [ ] Subscriptions - to be used in recommendations and personalized homepage
- [ ] Playlists - to allow user to create, update, delete and share playlists and incorporated into the up next functionality
- [ ] Smarter search - to autocomplete/provide suggestions and recognize typos
- [ ] Custom channel and user avatars
