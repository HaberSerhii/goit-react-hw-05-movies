import { Container } from '../App.styled';
import ErrorMessage from '../ErrorMessage';
import { Loader } from '../Loader';
import ReviewsList from '../ReviewsList';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsReviews } from '../../services/fetchMovies';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  const fetchReviews = useCallback(async movieId => {
    try {
      setIsLoading(true);
      setIsError('');
      const { results } = await getDetailsReviews(movieId);
      setReviews(results);
      if (!results.length) {
        throw new Error('There are no reviews yet');
      }
    } catch ({ message }) {
      setIsError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews(movieId);
  }, [fetchReviews, movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {isError && !isLoading && <ErrorMessage error={isError} />}
      {reviews && <ReviewsList reviews={reviews} />}
    </Container>
  );
};

export default Reviews;
