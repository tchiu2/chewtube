json.videos do
  @videos.each do |video|
    json.set! video.id do 
      json.extract! video, :id, :title, :description
      json.channelId video.channel_id
      json.createdAt video.created_at
      json.thumbUrl video.thumbnail.service_url
      json.views video.views.count
    end
  end
end

json.channels do
  @videos.each do |video|
    json.set! video.channel.id do
      json.partial! 'api/channels/channel', channel: video.channel
    end
  end
end
