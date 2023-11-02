import { BiBuildingHouse, BiLogoYoutube } from 'react-icons/bi';
import { NavLinkStyled, NavStyled } from './NavList.styled';

const NavList = () => {
  return (
    <NavStyled>
      <NavLinkStyled to="/">
        <BiBuildingHouse fill="red" />
        <span>Home</span>
      </NavLinkStyled>
      <NavLinkStyled to="/movies">
        <BiLogoYoutube fill="red" />
        <span>Movies</span>
      </NavLinkStyled>
    </NavStyled>
  );
};

export default NavList;
