json.channel do
  json.extract! @channel, :name, :description, :id
  json.ownerId @channel.user_id
  json.createdAt @channel.created_at
end
