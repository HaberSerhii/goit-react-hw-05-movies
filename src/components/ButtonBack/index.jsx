import { BiArrowBack } from 'react-icons/bi';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { MovieLink } from './ButtonBack.styled';

const ButtonBack = () => {
  const location = useLocation();
  let backLinkHref = location?.state.from || '/';

  if (location.state.path) {
    backLinkHref = location.state.path;
  }

  return (
    <MovieLink to={backLinkHref}>
      <BiArrowBack />
      <span>Go back</span>
    </MovieLink>
  );
};

export default ButtonBack;
