import React from 'react';

import '../css/App.css';
import settings from '../services/settings';

const List = (props) => {
  const print = props.data.map((item) => {
    return (
      <div className="" key={item.id}>
        <div className="">
          <h2 className="">{item.title}</h2>
          <p className="">{item.overview}</p>
          <p className="">Release date: {item.release_date}</p>
          <p className="">Vote average: {item.vote_average}</p>
          <p className="">Vote count: {item.vote_count}</p>
          <p className="">Popularity: {item.popularity}</p>
          <img className="" src={`${settings.imgUrl}${item.poster_path}`} alt={item.title} />
        </div>
      </div>
    );
  });

  return (
    <div className="">
      {print}
    </div>
  );
};

export default List;
