json.extract! channel, :name, :description, :id
json.ownerId channel.user_id
json.createdAt channel.created_at
json.videoIds channel.videos.map { |video| video.id }
json.totalViews channel.videos.map { |video| video.views.count }.reduce(:+) || 0
