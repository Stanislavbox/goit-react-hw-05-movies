import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getMovie } from 'fetch_api/fetch_api';
import { Loader } from 'components/Loader/Loader';
import {
  MovieList,
  MovieItem,
  MoviesWrapper,
  SearchForm,
  SearchLabel,
  SearchInput,
  NotFoundMessage,
  NotFoundContainer,
  SearchButton,
} from './Movies.styled';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [searchInputValue, setSearchInputValue] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const movieName = searchMovie.get('movieName') ?? '';

      try {
        setIsLoading(true);
        const data = await getMovie(movieName);
        setMovies(data.results);
        if (data.results.length === 0) {
          setError(`Movie '${movieName}' not found`);
        } else {
          setError(null);
        }
        setIsInputEmpty(movieName === '');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchMovie]);

  useEffect(() => {
    const movieName = searchMovie.get('movieName') ?? '';
    setSearchInputValue(movieName);
  }, [searchMovie]);

  const handleSearch = evt => {
    setSearchInputValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchInputValue === '') {
      setIsInputEmpty(true);
      setSearchMovie({});
    } else {
      setIsInputEmpty(false);
      setSearchMovie({ movieName: searchInputValue });
    }
  };

  return (
    <MoviesWrapper>
      {isLoading && <Loader />}

      <SearchForm onSubmit={handleSubmit}>
        <SearchLabel>Movie search</SearchLabel>
        <SearchInput
          type="text"
          value={searchInputValue}
          onChange={handleSearch}
        />
        <SearchButton type="submit">Search</SearchButton>
        {!isInputEmpty && error && (
          <NotFoundContainer>
            <NotFoundMessage>
              Movie {searchInputValue} not found
            </NotFoundMessage>
          </NotFoundContainer>
        )}
      </SearchForm>

      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </MovieItem>
        ))}
      </MovieList>
    </MoviesWrapper>
  );
};

export default Movies;
