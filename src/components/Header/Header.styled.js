import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  margin: 0;
  padding: 0 px;
  height: 103px;
  background-color: rgba(255, 215, 0, 1);

  @media screen and (min-width: 768px) {
    padding: 0 70px;
  }

  @media screen and (min-width: 1220px) {
    padding: 0 100px;
  }
`;

export const LogoImage = styled.img`
  width: 180px;
  height: 95px;
  margin-top: 15px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    gap: 50px;
    font-size: 24px;
  }

  @media screen and (min-width: 1220px) {
    font-size: 30px;
    gap: 50px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--dark-text);
  text-decoration: none;
  transition: transform 0.3s ease;

  &.active {
    color: var(--active-bg);
  }

  &:hover {
    transform: scale(1.1);
  }
`;
