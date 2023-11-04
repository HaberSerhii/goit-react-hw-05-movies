import { useLocation } from 'react-router-dom';
import { Container } from '../App.styled';
import {
  AdditionalInfoWrap,
  AdditionalNavBox,
  AdditionalNavLink,
  AdditionalTitle,
} from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  const location = useLocation();
  const state = {
    path: location.state.path || '/',
  };

  if (location.state.from) {
    const { pathname, search } = location.state.from;

    state.path = `${pathname}${search}`;
  }
  return (
    <AdditionalInfoWrap>
      <Container>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <AdditionalNavBox>
          <AdditionalNavLink to="cast" state={state}>
            Cast
          </AdditionalNavLink>
          <AdditionalNavLink to="reviews" state={state}>
            Reviews
          </AdditionalNavLink>
        </AdditionalNavBox>
      </Container>
    </AdditionalInfoWrap>
  );
};

export default AdditionalInfo;
