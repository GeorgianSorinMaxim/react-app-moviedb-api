import React from 'react';

import '../css/App.css';
import image from '../../public/static.png';

const OnTvNow = () => {
  return (
    <div>
      <h2>On TV Now</h2>
      <img className="onTv" src={image} alt="onTv" />
    </div>
  );
};

export default OnTvNow;
