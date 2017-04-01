import React from 'react';

import '../css/App.css';
import settings from '../services/settings';

const Autocomplete = (props) => {
  const print = props.data.map((item) => {
    return (
      <div className="item" key={item.id}>
        <div className="thumbFloat">
          { item.poster_path && <img className="thumbSearch" src={`${settings.imgUrl}${item.poster_path}`} alt={item.title} /> }
        </div>

        <div className="movieDataFloat">
          <p className="itemTitleSearch">{item.title}</p>
          <p className="itemReleaseSearch">{item.release_date}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="autocompleteContainer">
      {print.length ? print : <p className="noResults">No results found for <i>{props.query}</i></p>}
    </div>
  );
};

export default Autocomplete;
