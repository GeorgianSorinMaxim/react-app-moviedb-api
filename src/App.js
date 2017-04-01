import React, { Component } from 'react';

import OnTvNow from './components/AppOnTvNow';
import Header from './components/AppHeader';
import Search from './components/AppSearch';
import LatestMovies from './components/AppLatestMovies';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Search />

        <OnTvNow />

        <LatestMovies />
      </div>
    );
  }
}

export default App;
