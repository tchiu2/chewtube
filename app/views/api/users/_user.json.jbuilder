json.extract! user, :id, :username, :email
json.ownedChannelIds do
  json.array! user.channels.map { |channel| channel.id }
end
