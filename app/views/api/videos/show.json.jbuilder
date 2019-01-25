json.extract! @video, :title, :description, :uploader_id, :created_at
json.videoUrl @video.video.service_url
json.thumbUrl @video.thumbnail.service_url
