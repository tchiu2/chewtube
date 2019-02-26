import React, { Component } from 'react';

class VideoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      description: '',
      ...(this.props.videos ? this.props.videos[this.props.match.params.videoId] : this.props.location.state.video), 
      formSubmitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.props.fetchVideo(this.props.match.params.videoId);
    }
  }

  componentWillReceiveProps(nextProps) {
    const videoId = this.props.match.params.videoId;
    if (nextProps.videos[videoId] !== this.props.videos[videoId]) {
      this.setState({ ...this.state, ...nextProps.videos[videoId] });
    }
  }

  update(field) {
    return (e) => {
      const { value, maxLength } = e.target;
      const fieldValue = value.slice(0, maxLength);
      this.setState({ [field]: fieldValue });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[id]', this.props.match.params.videoId);
    
    this.setState({
      formSubmitted: true
    });

    this.props.updateVideo(formData, this.props.history);
  }

  handleDelete(e) {
    e.preventDefault();

    this.setState({
      formSubmitted: true
    });

    this.props.deleteVideo(this.props.match.params.videoId, this.props.history);
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push(`/videos/${this.props.match.params.videoId}`);
  }

  render() {
    return (
      <div className="video-upload-form-container">
        <form onSubmit={this.handleSubmit} className="video-upload-form">
          <div className="video-upload-form-details-container">
            <h2 className="video-upload-form-details-header">Video details</h2>

            <input
              className="video-upload-form-input"
              required
              type="text"
              maxLength="100"
              value={this.state.title}
              onChange={this.update('title')}
            />

            <textarea
              className="video-upload-form-description"
              required
              maxLength="1000"
              value={this.state.description}
              onChange={this.update('description')}
            />
          </div>

          <div className="video-edit-buttons">
            <button 
              disabled={this.state.formSubmitted}
              className="form-submit">
              Update
            </button>

            <button 
              disabled={this.state.formSubmitted}
              onClick={this.handleDelete.bind(this)}
              className="form-submit">
              Delete
            </button>

            <button 
              disabled={this.state.formSubmitted}
              onClick={this.handleCancel}
              className="form-cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };
}

export default VideoEdit;
