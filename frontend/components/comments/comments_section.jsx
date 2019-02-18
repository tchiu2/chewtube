import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import Comment from './comment';
import CommentForm from './comment_form';

const msp = ({ entities: { users, comments }, session }, { video }) => ({
  video,
  users,
  comments: Object.values(comments),
  session,
});

const mdp = {
  deleteComment,
};

const CommentsSection = ({ video, users, comments, session: { currentUserId }, deleteComment }) => {
  return (
    <div className="comments-section"> 
      <CommentForm video={video} />
      {comments.length > 0 ? comments.map(comment => 
        <Comment 
          key={comment.id}
          comment={comment}
          channelId={video.channelId}
          user={users[comment.userId]}
          currentUserId={currentUserId}
          deleteComment={deleteComment}
        />) : null}
    </div>
  );
};
export default connect(msp, mdp)(CommentsSection);
