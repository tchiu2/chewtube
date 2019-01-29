import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './comment';
import CommentForm from './comment_form';

const msp = ({ entities: { users, comments }, session }, { video }) => ({
  video,
  users,
  comments: Object.values(comments),
  session,
});

const CommentsSection = ({ video, users, comments, session: { currentUserId } }) => {
  return (
    <div className="comments-section"> 
      <CommentForm video={video} />
      {comments.length > 0 ? comments.map(comment => 
        <Comment 
          key={comment.id}
          comment={comment}
          uploaderId={video.uploaderId}
          user={users[comment.userId]}
          currentUserId={currentUserId}
        />) : null}
    </div>
  );
};
export default connect(msp)(CommentsSection);
