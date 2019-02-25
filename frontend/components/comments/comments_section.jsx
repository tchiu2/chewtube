import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

class CommentsSection extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(user) {
    debugger
    return (e) => {
      e.preventDefault();
      user.ownedChannelIds.length > 0 ? this.props.history.push(`/channels/${user.ownedChannelIds[0]}`) : null;
    }
  }

  render() {
    const { video, users, comments, session: { currentUserId }, deleteComment } = this.props;
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
            onClick={this.handleClick(users[comment.userId])}
          />) : null}
      </div>
    );
  };
}
export default withRouter(connect(msp, mdp)(CommentsSection));
