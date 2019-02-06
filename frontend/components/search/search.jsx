import React, { Component } from 'react';

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

export default Search;
