import React, { Component } from 'react';
import { formatDate } from '../../util/date_util';
import UserIcon from '../icons/user_icon';
import LikeButtons from '../likes/like_buttons';

class Comment extends Component { 
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }
  
  render() {
    const { comment, user, currentUserId, channelId } = this.props;
    return (
      <div className="comment-container">
      <UserIcon user={user} className="comment-icon" />
        <div className="comment-main-content">
          <div className="comment-left-items">
            <div className="comment-content">
              <div className="comment-heading">
                <div className={`comment-username ${channelId === user.ownedChannelIds[0] ? "comment-uploader" : ""}`}>{user.username}</div>
                <div className="comment-date">{formatDate(comment.createdAt)}</div>
              </div>
              <div className="comment-body">
                {comment.body}
              </div>
            </div>
          </div>
          <LikeButtons
            currentUserId={this.props.currentUserId}
            type="Comment"
            id={comment.id}
            numLikes={comment.numLikes}
            numDislikes={comment.numDislikes}
            className="comment-likes"
          />
        </div>
          {currentUserId !== comment.userId ? null : 
            (
              <div className="comment-right-items">
                <button className="comment-delete-btn" onClick={this.handleDelete}>delete</button>
              </div>
            )
          }
      </div>
    );
  }
}

export default Comment;
