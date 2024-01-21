import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mainPicture from '.././assets/mainIMG.jpg';

const ParallaxBackground = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientY } = e;
    const offsetY = (clientY / window.innerHeight - 0.5) * 100;
    setOffset({ y: offsetY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <StyledParallaxBackground offset={offset} src={mainPicture} />;
};

const StyledParallaxBackground = styled.img.attrs((props) => ({
  style: {
    transform: `translateY(${props.offset.y}px)`,
  },
}))`
  position: absolute;
  top: 50px;
  left: 0px;
  height: 110vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  z-index: -1;
`;

export default ParallaxBackground;
