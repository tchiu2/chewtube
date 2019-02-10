import React, { Component } from 'react';
import SearchResultItem from './search_result_item';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.query = new URLSearchParams(this.props.location.search).get('search_query');
  }

  componentDidMount() {
    this.props.fetchVideos({ search: this.query });
  }

  componentDidUpdate() {
    this.query = new URLSearchParams(this.props.location.search).get('search_query');
  }

  render() {
    const results = this.props.videos.map((video, idx) => 
      <SearchResultItem key={idx} video={video} channel={this.props.channels[video.channelId]} />
    );
    return (
      <div className="search-results">
        <div className="search-results-header">
          Displaying results for <strong className="query-string">"{this.query.split("+").join(" ")}"</strong>
        </div>
        {results}
      </div>
    );
  }
}

export default SearchResults;
