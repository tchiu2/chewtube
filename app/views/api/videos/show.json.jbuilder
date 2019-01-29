json.video do
  json.extract! @video, :title, :description, :id
  json.commentIds @video.comment_ids
  json.uploaderId @video.uploader_id
  json.createdAt @video.created_at
  json.videoUrl @video.video.service_url
end

json.uploader do
  json.partial! 'api/users/user', user: @video.uploader
end

@video.comments.includes(:user).each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end

  json.commentUsers do
    json.set! comment.user.id do
      json.extract! comment.user, :id, :username
    end
  end
end
