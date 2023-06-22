import { useEffect } from 'react';
// /movies/:movieId
// http://localhost:3000/goit-react-hw-05-movies/movies/film-4
import { Outlet, useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  useEffect(() => {
    // HTTP запрос если нужно
  }, []);
  return (
    <div>
      <h1>{movieId}</h1>
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
  );
};

export default MovieDetails;
