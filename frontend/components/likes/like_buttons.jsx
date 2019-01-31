import React, { Component } from 'react';
import { connect } from 'react-redux';
import { like, unlike } from '../../actions/like_actions';

const msp = ({ entities: { users, likes, videos } }) => ({
  users,
  likes: Object.values(likes),
  videos,
});

const mdp = {
  like,
  unlike,
}

class LikeButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numLikes: this.props.numLikes,
      numDislikes: this.props.numDislikes,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.numLikes !== prevProps.numLikes || this.props.numDislikes !== prevProps.numDislikes) {
      this.setState({
        numLikes: this.props.numLikes,
        numDislikes: this.props.numDislikes,
      });
    }
  }

  handleClick(type) {
    return (e) => {
      e.preventDefault();

      const like = {
        user_id: this.props.session.currentUserId,
        dislike: type === 'dislike',
        likeable_type: this.props.type,
        likeable_id: this.props.id,
      };

      if (this.props.likes.length > 0) {
        if (this.props.likes[0].dislike === like.dislike) {
          if (type === 'dislike') {
            this.setState({ numDislikes: --this.state.numDislikes });
          } else {
            this.setState({ numLikes: --this.state.numLikes });
          }

          this.props.unlike({ like });
        } else {
          if (type === 'dislike') {
            this.setState({
              numLikes: --this.state.numLikes,
              numDislikes: ++this.state.numDislikes,
            });
          } else {
            this.setState({
              numLikes: ++this.state.numLikes,
              numDislikes: --this.state.numDislikes,
            });
          }

          this.props.like({ like });
        }
      } else {
        if (type === 'dislike') {
          this.setState({
            numDislikes: ++this.state.numDislikes,
          });
        } else {
          this.setState({
            numLikes: ++this.state.numLikes,
          });
        }

        this.props.like({ like });
      }
    }
  }

  render () {
    return (
      <div className="likes-container">
        <button onClick={this.handleClick('like')} className="like-btn">Up</button>
        <div className="like-count num-likes">{this.state.numLikes}</div>
        <button onClick={this.handleClick('dislike')} className="like-btn">Down</button>
        <div className="like-count num-dislikes">{this.state.numDislikes}</div>
      </div>
    );
  }
}

export default connect(msp, mdp)(LikeButtons);
