import React, { Component } from 'react';

class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.channel, formSubmitted: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "scroll";
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ formSubmitted: true });
    this.props.processForm({
      ...this.state,
      user_id: this.props.currentUserId,
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.formType === 'create' ? this.props.history.push('/') : this.props.history.push(`/channels/${this.props.channel.id}`);
  }

  render() {
    return (
      <div className="channel-form-overlay">
        <div className="channel-form-container">
          <div className="channel-form-header">Use ChewTube as...</div>
          <form onSubmit={this.handleSubmit} className="channel-form">
            <div className="channel-form-fields">
              <i className="fas fa-user"></i> 
              <div className="channel-form-inputs">
                <div className="channel-form-input-container">
                  <input
                    className="channel-form-input"
                    required
                    onChange={this.update("name")}
                    value={this.state.name}
                    type="text"
                    placeholder="Channel Name"/>
                </div>

                <div className="channel-form-input-container">
                  <textarea
                    className="channel-form-input"
                    onChange={this.update("description")}
                    value={this.state.description}
                    rows="1"
                    placeholder="Description"/>
                </div>
              </div>
            </div>

            <div className="channel-form-buttons">
              <button 
                disabled={this.state.formSubmitted}
                onClick={this.handleCancel.bind(this)}
                className="form-cancel">
                Cancel
              </button>

              <button 
                disabled={this.state.formSubmitted}
                className="form-submit">
                {this.props.formType === 'create' ? "Create Channel" : "Update Channel"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ChannelForm;
