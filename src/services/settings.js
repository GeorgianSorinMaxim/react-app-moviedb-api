const imgUrl = `http://image.tmdb.org/t/p/w185//`;
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'b2b7f6073ca01b48c97ff07b56098ca1';
const latestMovies = `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

export default {
  imgUrl,
  latestMovies,
};
