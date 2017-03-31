import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input'

import getData from '../services/getData';

import List from './list';

import '../css/App.css';

const KEYS_TO_FILTERS = ['title', 'overview'];

class LatestMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchTerm: '',
    };

    this.searchUpdated = this.searchUpdated.bind(this);
  }

  // Get the data by calling getData.getMovies()
  componentDidMount() {
    getData.getMovies().then(res => {
      const data = res.results;
      this.setState({ data });
    });
  }

  // When the inputted string changes in the input field, update setState
  searchUpdated(searchTerm) {
    this.setState({ searchTerm });
  }

  render() {
    let filteredData = [];

    if (this.state.data) {
      filteredData = this.state.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    }

    return (
      <div className="latestMovies">
        { this.state.data && <h2>Discover the latest movies on TheMovieDb</h2> }

        { this.state.data && <SearchInput className="search-input" onChange={this.searchUpdated} placeholder="Search the latest movies" /> }

        <div className="container">
          { this.state.data && <List data={filteredData} query={this.state.searchTerm}/> }
          { !this.state.data && <p>No data found</p> }
        </div>
      </div>
    );
  }
}

export default LatestMovies;
