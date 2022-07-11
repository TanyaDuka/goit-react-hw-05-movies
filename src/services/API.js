import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '067f291d21ed1c6d30bd9ade17d843cc';

axios.defaults.baseURL = BASE_URL;

export async function getTrendingMovies() {
  const url = `trending/movie/day?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(movieId) {
  try {
    const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCastById(movieId) {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function getReviewsById(movieId) {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMoviesbySearchQuery(movieName) {
  const url = `search/movie?api_key=${API_KEY}&query=${movieName}`;
  try {
    const { data } = await axios.get(url);
    return data.results;
  } catch (error) {
    console.error(error);
  }
}
