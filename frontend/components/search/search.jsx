import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return (e) => {
      this.setState({
        query: this.search.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = this.state.query.split(" ").join("+");
    this.props.history.push(`/results?search_query=${query}`);
  }

  render() {
    return (
      <form 
        className="search-input-container"
        onSubmit={this.handleSubmit}>
        <input
          className="search-input"
          ref={node => this.search = node}
          onChange={this.update()}
          placeholder="Search"
          value={this.state.query}
        />
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default withRouter(Search);
