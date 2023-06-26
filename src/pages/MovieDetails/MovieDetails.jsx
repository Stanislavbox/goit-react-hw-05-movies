import { useEffect, useState, Suspense, useRef } from 'react';
import {
  GoBackLink,
  MovieDetailsWrapper,
  MovieImage,
  MovieInfo,
  Genres,
  LinksWrapper,
  LinksList,
  LinkItem,
} from './MovieDetails.styled';
import { useLocation, Outlet, useParams, Link } from 'react-router-dom';
import { getDetailMovie } from 'fetch_api/fetch_api';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');
  const [urlImage, setUrlImage] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDetalsMovie = async () => {
      try {
        setIsLoading(true);
        const getMovie = await getDetailMovie(movieId);
        const getGenres = getMovie.genres;
        const getDate = getMovie.release_date.split('-')[0];
        const getUrl = `https://image.tmdb.org/t/p/w500${getMovie.poster_path}`;

        if (getMovie === []) {
          setError(`No information on the film`);
        }
        setGenres(getGenres);
        setMovie(getMovie);
        setDate(getDate);
        setUrlImage(getUrl);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetalsMovie();
  }, [movieId]);

  const { title, overview, vote_average } = movie;

  return (
    <MovieDetailsWrapper>
      {error && <p>Sorry, something went wrong</p>}
      {isLoading && <Loader />}
      <GoBackLink to={goBack.current}>Go back</GoBackLink>
      <div>
        <MovieImage src={urlImage} alt={title}></MovieImage>
        <MovieInfo>
          <h1>
            {title}
            <span>{date}</span>
          </h1>
          <p>User Score:{(vote_average * 10).toFixed(0)} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <Genres>{genres.map(el => el.name).join(' / ')}</Genres>
        </MovieInfo>
      </div>
      <LinksWrapper>
        <LinksList>
          <LinkItem>
            <Link to="cast">Cast</Link>
          </LinkItem>
          <LinkItem>
            <Link to="reviews">Reviews</Link>
          </LinkItem>
        </LinksList>
      </LinksWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MovieDetailsWrapper>
  );
};

export default MovieDetails;
