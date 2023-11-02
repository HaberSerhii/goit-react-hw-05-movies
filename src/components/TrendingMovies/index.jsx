import { Container, Heading } from '../App.styled';
import MoviesList from '../MoviesList';

function TrendingMovies({ movies }) {
  return (
    <Container>
      <Heading>Trending today</Heading>
      <MoviesList moviesList={movies} />
    </Container>
  );
}
export default TrendingMovies;
