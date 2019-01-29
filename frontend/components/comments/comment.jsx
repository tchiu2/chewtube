import React, { Component } from 'react';
import { formatDate } from '../../util/date_util';
import UserIcon from '../icons/user_icon';

const Comment = ({ comment, user, currentUserId, uploaderId }) => (
  <div className="comment-container">
    <UserIcon user={user} className="comment-icon" />
    <div className="comment-content">
      <div className="comment-heading">
        <div className={`comment-username ${uploaderId === user.id ? "comment-uploader" : ""}`}>{user.username}</div>
        <div className="comment-date">{formatDate(comment.createdAt)}</div>
      </div>
      <div className="comment-body">
        {comment.body}
      </div>
    </div>
  </div>
);

export default Comment;
