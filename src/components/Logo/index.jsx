import { Link } from 'react-router-dom';
import { LogoFirstWord, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <Link to="/">
      <LogoText>
        <LogoFirstWord>Wes</LogoFirstWord>Allen
      </LogoText>
    </Link>
  );
};

export default Logo;
