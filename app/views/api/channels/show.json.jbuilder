json.channel do
  json.extract! @channel, :name, :description, :id
  json.ownerId @channel.user_id
  json.createdAt @channel.created_at
  json.videoIds @channel.videos.map { |video| video.id }
end

@channel.videos.includes(:likes).each do |video|
  json.videos do
    json.set! video.id do
      json.extract! video, :id, :title, :description
      json.createdAt video.created_at
      json.thumbUrl video.thumbnail.service_url
      json.views video.views.count
    end
  end
end
