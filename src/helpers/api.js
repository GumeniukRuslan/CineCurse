import axios from 'axios';

const KEY = '2de054a07ae490574e29d3b99d4d100e';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING = '/trending/movie/day';
const SEARCH = '/search/movie';

export async function getTrends(page = 1) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
    page: page,
  });
  const response = await axios.get(`${BASE_URL}${TRENDING}?${searchParams}`);
  return response.data.results;
}
export async function getOneMovie(id) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await axios.get(`${BASE_URL}/movie/${id}?${searchParams}`);
  return response.data;
}

export const getMovies = async (query, page = 1) => {
  const searchParams = new URLSearchParams({
    api_key: KEY,
    query: query,
    page: page,
  });
  const response = await axios.get(`${BASE_URL}${SEARCH}?${searchParams}`);
  console.log(response);
  return response.data;
};
