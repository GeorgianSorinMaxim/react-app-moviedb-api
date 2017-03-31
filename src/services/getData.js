import axios from 'axios';
import settings from './settings';

export default {
  // Get latest movies data from MovieDb
  getMovies: () => axios
    .get(settings.latestMovies)
    .then(res => res.data)
    .catch(error => console.log(error)),

  // Query MovieDb for movies using the user inputted query
  getMoviesByQuery: query => axios
    .get(`${settings.baseUrl}search/movie?query=${query}&api_key=${settings.apiKey}`)
    .then(res => res.data)
    .catch(err => console.log(err)),
};
