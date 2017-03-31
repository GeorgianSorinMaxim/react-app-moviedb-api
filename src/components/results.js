import React from 'react';

import List from './list';

const Results = (props) => {
  return (
    <div className="listContainer">
      { props.data.results && <List data={props.data.results} /> }
      { !props.data.results && <p>No data found</p> }
    </div>
  );
};

export default Results;
