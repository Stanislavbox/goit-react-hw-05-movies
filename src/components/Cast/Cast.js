import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'fetch_api/fetch_api';
import { CastList, CastItem, ActorImage, ActorInfo } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCast(movieId);
        const castList = data.cast;
        if (!castList.length) {
          setError(`There is no cast list`);
        }

        setCasts(castList);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCast();
  }, [movieId, error]);

  return (
    <CastList>
      {casts.map(cast => (
        <CastItem key={cast.id}>
          <ActorImage
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.name}
          />
          <ActorInfo>Name: {cast.name}</ActorInfo>
          <ActorInfo>Character: {cast.character}</ActorInfo>
        </CastItem>
      ))}
    </CastList>
  );
};
