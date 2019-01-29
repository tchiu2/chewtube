import React, { Component } from 'react';
import { formatDate } from '../../util/date_util';

const Comment = ({ comment, user, currentUserId, uploaderId }) => (
  <div>
    <div className="comment-heading">
      <div className={`comment-username ${uploaderId === user.id ? "comment-uploader" : ""}`}>{user.username}</div>
      <div className="comment-date">{formatDate(comment.createdAt)}</div>
    </div>
    <div className="comment-body">
      {comment.body}
    </div>
  </div>
);

export default Comment;
