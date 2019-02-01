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
  
  componentDidMount() {
    this.props.type === 'Video' ?  this.calculateBar() : null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.numLikes !== prevProps.numLikes || this.props.numDislikes !== prevProps.numDislikes) {
      this.setState({
        numLikes: this.props.numLikes,
        numDislikes: this.props.numDislikes,
      });
    }
    this.props.type === 'Video' ?  this.calculateBar() : null;
  }

  handleClick(type) {
    return (e) => {
      e.preventDefault();

      if (this.props.currentUserId === null) {
        return alert("Please log in to perform this action");
      }

      const like = {
        user_id: this.props.currentUserId,
        dislike: type === 'dislike',
        likeable_type: this.props.type,
        likeable_id: this.props.id,
      };

      const likedItems = this.props.likes.map(like => `${like.likeableType}${like.likeableId}`);
      const currentItemId = `${this.props.type}${this.props.id}`;

      if (likedItems.includes(currentItemId)) {
        if (this.props.likes.filter(like => 
            like.likeableType === this.props.type 
            && like.likeableId === this.props.id 
            && like.dislike === (type === 'dislike')).length > 0) { 
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
      this.calculateBar();
    }
  }

	calculateBar() {
		let total = this.state.numLikes + this.state.numDislikes;

		let percentageLikes = total === 0 ? 50 : (this.state.numLikes/total) * 100;
		let percentageDislikes = total === 0 ? 50 : (this.state.numDislikes/total) * 100;

		document.getElementById('likes').style.width=percentageLikes.toString()+"%";
		document.getElementById('dislikes').style.width=percentageDislikes.toString()+"%";
	}

  render() {
    return (
      <div className={`likes-container ${this.props.className ? this.props.className : ""}`}>
        <div className="like-btns">
          <div className={`like-btn-container ${this.props.likes.filter(like => like.likeableType === this.props.type && like.likeableId === this.props.id && like.dislike === false).length > 0 ? "liked" : ""}`}>
            <button 
              onClick={this.handleClick('like')} 
              className="like-btn">
              <i className="fas fa-thumbs-up"></i>
            </button>
            <div className="like-count num-likes">{this.state.numLikes}</div>
          </div>
          <div className={`like-btn-container ${this.props.likes.filter(like => like.likeableType === this.props.type && like.likeableId === this.props.id && like.dislike === true).length > 0 ? "liked" : ""}`}>
            <button 
              onClick={this.handleClick('dislike')} 
              className="like-btn">
              <i className="fas fa-thumbs-down"></i>
            </button>
            <div className="like-count num-dislikes">{this.state.numDislikes}</div>
          </div>
        </div>
        {this.props.type === 'Comment' ? null : (
          <div className="like-bar">
            <div id="likes" className={`likes ${this.props.likes.filter(like => like.likeableType === this.props.type && like.likeableId === this.props.id).length > 0 ? "liked-bar" : ""}`} />
            <div id="dislikes" className="dislikes" />
          </div>
        )}
      </div>
    );
  }
}

export default connect(msp, mdp)(LikeButtons);
