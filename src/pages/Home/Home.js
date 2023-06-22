import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTopMovies } from 'fetch_api/fetch_api';
import { SectionTopMovies, ListTopMovies } from './Home.styled';

const Home = () => {
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState(null);
  // const location = useLocation(); //для отримання шляху з якого переходимо для передачи через props

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTopMovies();
        const movies = data.results;
        setMovie(movies);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <SectionTopMovies>
      <h1>Trending today</h1>

      {error && <p>Sorry, something went wrong</p>}

      <ListTopMovies>
        {movies.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`} state={{}}>
              {film.title}
            </Link>
          </li>
        ))}
      </ListTopMovies>
    </SectionTopMovies>
  );
};

export default Home;
