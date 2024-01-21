import { Link } from 'react-router-dom';
import { HeaderWrap, LogoImage, Navigation, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <Link to="/">
        <LogoImage src={process.env.PUBLIC_URL + '/logo.png'} alt="Car Rent Logo" />
</Link>
        <Navigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </Navigation>
      </HeaderWrap>
    </>
  );
};

export default Header;
