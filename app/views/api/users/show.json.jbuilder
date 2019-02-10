json.partial! 'api/users/user/', user: @user

json.likedVideoIds do
  likedVideos = @user.likes.where(likeable_type: 'Video')
  json.array! likedVideos.map{ |like| like.likeable_id }
end

json.likedCommentIds do
  likedComments = @user.likes.where(likeable_type: 'Comment')
  json.array! likedComments.map{ |like| like.likeable_id }
end

json.ownedChannelIds do
  json.array! @user.channels.map { |channel| channel.id }
end
