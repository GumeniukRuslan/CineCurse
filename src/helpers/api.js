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
  return response.data;
}

export async function getMovies(query, page = 1) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
    query: query,
    page: page,
  });
  const response = await axios.get(`${BASE_URL}${SEARCH}?${searchParams}`);
  return response.data;
}

export async function getOneMovie(id) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await axios.get(`${BASE_URL}/movie/${id}?${searchParams}`);
  return response.data;
}

export async function getCast(id) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?${searchParams}`
  );
  return response.data;
}

export async function getReviews(id) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?${searchParams}`
  );
  return response.data;
}
export async function getTrailer(id) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/videos?${searchParams}`
  );
  return response.data;
}
