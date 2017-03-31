import React from 'react';

import '../css/App.css';
import settings from '../services/settings';

const List = (props) => {
  const print = props.data.map((item) => {
    return (
      <div className="item" key={item.id}>
        <div className="thumbFloat">
          { item.poster_path && <img className="thumb" src={`${settings.imgUrl}${item.poster_path}`} alt={item.title} /> }
        </div>

        <div className="movieDataFloat">
          <p className="itemTitle">{item.title}</p>
          <p className="itemRelease">{item.release_date}</p>
          <p className="itemOverview">{item.overview}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      {print.length ? print : <p>No results found for <i>{props.query}</i></p>}
    </div>
  );
};

export default List;
