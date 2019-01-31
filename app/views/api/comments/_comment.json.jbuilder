json.extract! comment, :id, :body
json.videoId comment.video_id
json.userId comment.user_id
json.createdAt comment.created_at
json.numLikes comment.likes.where(dislike: false).length
json.numDislikes comment.likes.where(dislike: true).length
