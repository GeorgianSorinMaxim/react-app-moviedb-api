import React, { Component } from 'react';

import getData from './services/getData';

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  // Get the data by calling getData.getMovies()
  componentDidMount() {
    getData.getMovies().then(res => {
      const data = res.results;
      console.log(data);

      this.setState({ data });
    });
  }

  render() {
    return (
      <div className="App">
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
