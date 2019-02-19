json.video do
  json.extract! @video, :title, :description, :id
  json.commentIds @video.comment_ids
  json.channelId @video.channel_id
  json.createdAt @video.created_at
  json.videoUrl url_for(@video.video)
  json.numLikes @video.likes.where(dislike: false).count
  json.numDislikes @video.likes.where(dislike: true).count
  json.views @video.views.count
end

json.channel do
  json.partial! 'api/channels/channel', channel: @video.channel
  json.ownerId @video.channel.user_id
end

@video.comments.includes(:user, :likes).each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end

  json.commentUsers do
    json.set! comment.user.id do
      json.partial! 'api/users/user', user: comment.user
    end
  end

  if current_user
    comment.likes.where(user_id: current_user.id).each do |like|
      json.commentLikes do
        json.set! like.id do
          json.partial! 'api/likes/like', like: like
        end
      end
    end
  end
end

if current_user
  @video.likes.where(user_id: current_user.id).each do |like|
    json.likes do
      json.set! like.id do
        json.partial! 'api/likes/like', like: like
      end
    end
  end
end
