import React from 'react';

import '../css/App.css';

import Autocomplete from './AppAutocomplete';

const Results = (props) => {
  return (
    <div className="App">
      { props.data.results && <Autocomplete data={props.data.results} query={props.query} /> }
    </div>
  );
};

export default Results;
