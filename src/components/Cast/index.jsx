import { Container } from '../App.styled';
import CastList from '../CastList';
import ErrorMessage from '../ErrorMessage';
import { Loader } from '../Loader';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsCast } from '../../services/fetchMovies';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const fetchCast = useCallback(async movieId => {
    try {
      setIsLoading(true);
      setIsError('');
      const movieCast = await getDetailsCast(movieId);
      setCast(movieCast);
    } catch ({ message }) {
      setIsError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCast(movieId);
  }, [fetchCast, movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {isError && !isLoading && <ErrorMessage error={isError} />}
      {cast && <CastList cast={cast} />}
    </Container>
  );
};

export default Cast;
