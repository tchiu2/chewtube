import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import UserIcon from '../icons/user_icon';

const msp = ({ entities: { users }, session }, { video }) => ({
  video,
  users,
  currentUserId: session.currentUserId,
});

const mdp = {
  createComment,
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      hideButtons: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideFormButtons = this.hideFormButtons.bind(this);
    this.showFormButtons = this.showFormButtons.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ 
        [field]: e.target.value,
        submittable: (e.target.value.length > 0 ? true : false),
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('comment[video_id]', this.props.video.id);
    formData.append('comment[body]', this.state.body);
    this.props.createComment(formData);
  }

  showFormButtons(e) {
    e.preventDefault();
    this.setState({
      hideButtons: false
    });
  }

  hideFormButtons(e) {
    e.preventDefault();
    this.setState({
      hideButtons: true
    });
  }

  render() {
    return (
      this.props.currentUserId === null ? null : (
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <UserIcon 
            user={this.props.users[this.props.currentUserId]} 
            className="comment-form-icon"
          />

          <div className="comment-form-input-container">
            <textarea
              className="comment-form-input"
              onChange={this.update('body')}
              onClick={this.showFormButtons}
              value={this.state.body}
              placeholder="Add a public comment..."
            />

            {this.state.hideButtons ? null : (
              <div className="comment-form-buttons">
                <button
                  className="comment-form-cancel"
                  onClick={this.hideFormButtons}>
                  Cancel
                </button>
                
                <button
                  className="comment-form-submit"
                  disabled={!this.state.submittable}>
                  Comment
                </button>
              </div>
            )}
          </div>
        </form>
      )
    );
  }
}

export default connect(msp, mdp)(CommentForm);
