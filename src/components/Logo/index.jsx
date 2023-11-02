import { Link } from 'react-router-dom';
import { LogoFirstWord, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <Link to="/">
      <LogoText>
        <LogoFirstWord>Кіно</LogoFirstWord>Пошук
      </LogoText>
    </Link>
  );
};

export default Logo;
