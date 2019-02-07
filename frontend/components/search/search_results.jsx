import React, { Component } from 'react';
import SearchResultItem from './search_result_item';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    this.props.fetchVideos({search: query.get('search_query')});
  }

  render() {
    const results = this.props.videos.map((video, idx) => 
      <SearchResultItem key={idx} video={video} uploader={this.props.users[video.uploaderId]} />
    );
    return (
      <div className="search-results">
        {results}
      </div>
    );
  }
}

export default SearchResults;
