json.channel do
  json.extract! @channel, :name, :description, :id
  json.ownerId @channel.user_id
  json.createdAt @channel.created_at
  json.videoIds @channel.videos.map { |video| video.id }
end

@channel.videos.each do |video|
  json.videos do
    json.set! video.id do
      json.extract! video, :id, :title, :description
      json.createdAt video.created_at
      json.thumbUrl url_for(video.thumbnail)
      json.views video.views.count
      json.channelId video.channel_id
    end
  end
end
