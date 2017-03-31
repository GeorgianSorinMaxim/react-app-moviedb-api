import React, { Component } from 'react';

import getData from '../services/getData';
import Results from './results';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // When inputted string changes in the field, the component should make call for querying for the data
  handleChange(e) {
    if (e.target.value !== '') {
      this.queryData(e.target.value);
    } else {
      const data = {};
      this.setState({ data });
    }
  }

  // Query MovieDb based on the inputted string in the input field
  queryData(value) {
    getData.getMoviesByQuery(value)
      .then(data => {
        this.setState({ data })
      });
  }

  render() {
    return (
        <div className="">
          <form>
            <input
              type="text"
              className="inputField"
              placeholder="Find Movies"
              onChange={this.handleChange}
              ref={(input) => { this.textInput = input; }} />
          </form>

          <div className="">
            {this.state.data && <Results data={this.state.data} />}
          </div>
        </div>
    );
  }
}


export default Search;
