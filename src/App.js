import React, { Component } from 'react';

import LatestMovies from './components/latestMovies';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LatestMovies />
      </div>
    );
  }
}

export default App;
