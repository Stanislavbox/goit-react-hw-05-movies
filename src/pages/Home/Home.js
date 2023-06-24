import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTopMovies } from 'fetch_api/fetch_api';
import { SectionTopMovies, ListTopMovies } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [listMovies, setListMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const location = useLocation(); //для отримання шляху з якого переходимо для передачи через props

  useEffect(() => {
    const fetchListMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getTopMovies();
        const listMovies = data.results;

        setListMovies(listMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListMovies();
  }, []);

  return (
    <SectionTopMovies>
    
      {error && <p>Sorry, something went wrong</p>}
      {isLoading && <Loader />}
        <h1>Trending today</h1>
      <ListTopMovies>
        {listMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{}}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ListTopMovies>
    </SectionTopMovies>
  );
};

export default Home;
