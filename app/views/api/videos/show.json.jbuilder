json.extract! @video, :title, :description, :uploader_id, :created_at
json.videoUrl url_for(@video.video)
