json.videos do
  @videos.each do |video|
    json.set! video.id do 
      json.extract! video, :id, :title, :description
      json.uploaderId video.uploader_id
      json.createdAt video.created_at
      json.thumbUrl video.thumbnail.service_url
      json.views video.views.count
    end
  end
end

json.users do
  @videos.each do |video|
    json.set! video.uploader.id do
      json.partial! 'api/users/user', user: video.uploader
    end
  end
end
