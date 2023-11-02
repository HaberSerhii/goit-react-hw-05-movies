import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const HEADERS = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Njg5ZjY3MTI3NTkzYmJmN2ZiOWFhOTYxYTRkMTFiOSIsInN1YiI6IjY1MGZlZTVjMDljMjRjMDEzOTYzYjkzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kHOwxxw-4baWhmw2aBSM328EeRsoOG0MA9FBlSYl2SQ',
};
export const getPopularMovies = async movie => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/3/trending/all/day?language=en-US`,
    headers: HEADERS,
  };
  const { data } = await axios(options);
  return data;
};

export const getDetailsMovie = async movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/3/movie/${movieId}?language=en-US`,
    headers: HEADERS,
  };
  const { data } = await axios(options);
  return data;
};

export const getDetailsCast = async movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/3/movie/${movieId}/credits?language=en-US`,
    headers: HEADERS,
  };
  const { data } = await axios(options);
  return data;
};

export const getDetailsReviews = async movieId => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/3/movie/${movieId}/reviews?language=en-US&page=1`,
    headers: HEADERS,
  };

  const { data } = await axios(options);
  return data;
};

export const getSearchMovie = async (query, page = 1) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
    headers: HEADERS,
  };

  const { data } = await axios(options);
  return data;
};
