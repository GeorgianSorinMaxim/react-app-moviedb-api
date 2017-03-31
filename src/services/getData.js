import axios from 'axios';
import settings from './settings';

export default {
  // Get latest movies data from MovieDb
  getMovies: () => axios
    .get(settings.latestMovies)
    .then(res => res.data)
    .catch(error => console.log(error)),
};
