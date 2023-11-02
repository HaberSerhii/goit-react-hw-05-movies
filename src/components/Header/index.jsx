import NavList from '../NavList';
import { HeaderStyled } from './Header.styled';
import { Container } from '../App.styled';
import Logo from '../Logo';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <NavList />
        <Logo />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
