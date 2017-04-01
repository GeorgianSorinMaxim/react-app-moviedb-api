import React from 'react';
import ReactDOM from 'react-dom';

import settings from '../services/settings';

import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http'

const host = 'http://localhost';
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('getLatestMovies', () => {
  it('Should return at least 1 movie', () => {
    axios.get(settings.latestMovies).then(res => {
      expect(res.data.results.length).toBeGreaterThan(0);
    });
  });
});

describe('getMoviesByQuery', () => {
  it('Should return at least 1 movie with the query Hobbit', () => {
    axios
      .get(`${settings.baseUrl}search/movie?query=Hobbit&api_key=${settings.apiKey}`)
      .then(res => {
        expect(res.data.results.length).toBeGreaterThan(0);
      });
  });
});

describe('getMoviesByQueryFails', () => {
  it('Should return no movie with the query THISISAQUERYWITHNORESULTS', () => {
    axios
      .get(`${settings.baseUrl}search/movie?query=THISISAQUERYWITHNORESULTS&api_key=${settings.apiKey}`)
      .then(res => {
        expect(res.data.results.length).toEqual(0);
      });
  });
});
