import { useEffect, useState } from 'react';
import { getDetailMovie } from 'fetch_api/fetch_api';
import { Loader } from 'components/Loader/Loader';
// /movies/:movieId
// http://localhost:3000/goit-react-hw-05-movies/movies/film-4
import { Outlet, useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
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
        setIsLoading(true)
        const movie = await getDetailMovie(movieId);
        const genres = movie.genres;
        const date = movie.release_date.split('-')[0];
        const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        // ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        // : null;

        if (movie === []) {
          setError(`Інформація по фільму відсутня`);
        } else {
          setGenres(genres);
          setMovie(movie);
          setDate(date);
          setUrlImage(url);
        }
        setGenres(genres);
        setMovie(movie);
        setDate(date);
        setUrlImage(url);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetalsMovie();
  }, [movieId]);

  const { title, overview, vote_average } = movie;
  console.log('movie', movie);

  return (
    <section>
      {error && <p>Sorry, something went wrong</p>}
      {isLoading && <Loader />}
      <div>
        <img src={urlImage} alt={title}></img>
        <div>
          <h1>
            {title}
            <span>{date}</span>
          </h1>
          <p>User Score:{(vote_average * 10).toFixed(0)} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(el => el.name).join(' / ')}</p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};

export default MovieDetails;
