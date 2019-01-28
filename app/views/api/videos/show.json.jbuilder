json.video do
  json.extract! @video, :title, :description, :id
  json.uploaderId @video.uploader_id
  json.createdAt @video.created_at
  json.videoUrl @video.video.service_url
end

json.uploader do
  json.partial! 'api/users/user', user: @video.uploader
end
