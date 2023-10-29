import axios from 'axios';

const API_KEY = '7fd7dcc649bf8d8e2a7fe67af30429a3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const paramsKey = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};
export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, paramsKey);
  return response.data.results;
};
export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, paramsKey);
  return response.data;
};
export const getMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`, paramsKey);
  return response.data.cast;
};
export const getMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`, paramsKey);
  return response.data.results;
};

export const handleSearch = async movieName => {
  const response = await axios.get(
    `/search/movie?query=${movieName}`,
    paramsKey
  );
  return response.data.results;
};
