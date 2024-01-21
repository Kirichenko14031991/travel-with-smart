import { Link } from 'react-router-dom';

import { HomeWrap,  Title, Text, Button } from './Home.styled';
import { createGlobalStyle } from 'styled-components';
import ParallaxBackground from '../../helpers/parallaxBackground';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Home = () => {
  return (
    <HomeWrap>
      <GlobalStyle />
      <ParallaxBackground />
      
      <Title>Сar rental in Ukraine</Title>
      <Text>Any car to your liking and needs</Text>
      <Link to="/catalog">
        <Button type="button">Find Сar</Button>
      </Link>
    </HomeWrap>
  );
};

export default Home;
