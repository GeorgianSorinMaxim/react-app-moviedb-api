import React, { Component } from 'react';

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

        <hr className="separator" />
        <br /><br />

        <LatestMovies />
      </div>
    );
  }
}

export default App;
