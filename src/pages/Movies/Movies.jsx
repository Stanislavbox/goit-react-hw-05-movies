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
} from './Movies.styled';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useSearchParams();
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const movieName = searchMovie.get('movieName') ?? '';
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getMovie(movieName);
        setMovie(data.results);
        if (data.results.length === 0) {
          setError(`Movie '${movieName}' not found`);
        } else {
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isInputEmpty) {
      fetchMovie();
    }
  }, [isInputEmpty, movieName]);

  const handleSearch = evt => {
    const movieNameValue = evt.target.value;
    if (movieNameValue === '') {
      return setSearchMovie({});
    }
    setSearchMovie({ movieName: movieNameValue });
    setIsInputEmpty(false);
  };

  return (
    <MoviesWrapper>
      {isLoading && <Loader />}

      <SearchForm>
        <SearchLabel>Movie search</SearchLabel>
        <SearchInput type="text" value={movieName} onChange={handleSearch} />
        {!isInputEmpty && error && (
          <NotFoundContainer>
            <NotFoundMessage>Movie {movieName} not found</NotFoundMessage>
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
