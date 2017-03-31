import React, { Component } from 'react';

import OnTvNow from './components/onTvNow';
import Header from './components/header';
import QueryMovies from './components/queryMovies';
import LatestMovies from './components/latestMovies';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <QueryMovies />

        <OnTvNow />

        <LatestMovies />
      </div>
    );
  }
}

export default App;
