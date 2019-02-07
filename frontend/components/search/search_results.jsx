import React, { Component } from 'react';
//import SearchResultItem from './search_result_item';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const filters = new URLSearchParams(this.props.location.search);
    this.props.fetchVideos({search: filters.get('search_query')});
  }

  render() {
    return null;
  }
}

export default SearchResults;
