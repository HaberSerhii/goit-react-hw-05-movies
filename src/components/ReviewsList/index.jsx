import { ReviewsListStyled } from '../Reviews/Reviews.styled';
import ReviewsItem from '../ReviewsItem';
import React from 'react';

const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsListStyled>
      {reviews?.map(review => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ReviewsListStyled>
  );
};

export default ReviewsList;
