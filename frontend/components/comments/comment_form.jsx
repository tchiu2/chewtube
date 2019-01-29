import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';

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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ 
        [field]: e.target.value,
        submittable: (this.state[field].length > 0 ? true : false),
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button className={`comment-icon ${this.props.icon === undefined ? "user-icon" : ""}`}
          onClick={e => alert('clicked user icon')}>
          {this.props.icon !== undefined ? (
              this.props.icon 
            ) : (
              this.props.users[this.props.currentUserId].username.slice(0,1)
            )
          } 
        </button>

        <textarea
          onChange={this.update('body')}
          value={this.state.body}
          placeholder="Add a public comment..."
        />

        <button
          disabled={!this.state.submittable}>
          Comment
        </button>
      </form>
    );
  }
}

export default connect(msp, mdp)(CommentForm);
