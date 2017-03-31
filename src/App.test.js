import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import axios from 'axios';
import settings from './services/settings';

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('getLatestMovies', () => {
  it('abc', () => {
    axios.get(settings.latestMovies).then(res => {
      console.log(res);
      // expect(response.data).to.be.equal('test data');
      // done();
    });
  });
});
