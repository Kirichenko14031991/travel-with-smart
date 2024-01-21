import styled from 'styled-components';
import noResultsPicture from '../../assets/notfound.png';

export const FavoritesWrap = styled.div`
  position: relative;
`;

export const NoResultsImage = styled.img`
  position: absolute;
  top: 260px;
  left: 0px;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  width: 100%;
  height: 50vh;
  background-image: url(${noResultsPicture});

  @media screen and (min-width: 880px) {
    top: 100px;
  }
`;
