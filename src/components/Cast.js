import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'fetch_api/fetch_api';

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCast(movieId);
        const casts = data.cast;
        if (!casts.length) {
          setError(`There is no cast list`);
        }

        setCasts(casts);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCast();
  }, [movieId, error]);

  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.name}
          />
          <p>Name: {cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};
