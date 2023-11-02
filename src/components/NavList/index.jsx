import { BiMoviePlay } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { NavLinkStyled, NavStyled } from './NavList.styled';

const NavList = () => {
  return (
    <NavStyled>
      <NavLinkStyled to="/">
        <AiOutlineHome />
        <span>Home</span>
      </NavLinkStyled>
      <NavLinkStyled to="/movies">
        <BiMoviePlay />
        <span>Movies</span>
      </NavLinkStyled>
    </NavStyled>
  );
};

export default NavList;
