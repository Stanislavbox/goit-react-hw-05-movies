import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '558cf622523e55362ff984dccc2aa1ee';

export const getTopMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};
export const getMovie = async movieName => {
const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${movieName}&include_adult=false&language=en-US&page=1`,
  );
  console.log('first', response.data)
  return response.data;
};
