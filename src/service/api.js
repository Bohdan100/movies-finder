import axios from 'axios';

const API_KEY = '74c5e15336c71e6f10e46fc816460a0f';
const URL = 'https://api.themoviedb.org/3/trending/all/day';
const URL_SEARCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';
const URL_SEARCH_BY_ID = 'https://api.themoviedb.org/3/movie';

// get trending movies
async function getDataTrendingMovies() {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL}`);
    return data.results;
  } catch (error) {}
}

// get movies by search name
async function getDataMoviesBySearchName(name) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    query: `${name}`,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_NAME}`);
    return data.results;
  } catch (error) {}
}

// get movie by id
async function getDataMovieById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}`);

    return data;
  } catch (error) {}
}

// get actors by id
async function getDataActorsById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}/credits`);
    return data.cast;
  } catch (error) {}
}

// get reviews by id
async function getDataReviewsById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}/reviews`);
    return data.results;
  } catch (error) {}
}

const apiGet = {
  getTrending: getDataTrendingMovies,
  movieById: getDataMovieById,
  getReviews: getDataReviewsById,
  getActors: getDataActorsById,
  getMoviesByName: getDataMoviesBySearchName,
};

export default apiGet;
