import styled from 'styled-components';
import mainPicture from '../../assets/mainIMG.jpg';

export const HomeWrap = styled.div`
  margin-top: 80px;
  margin-left: 60px;

  @media screen and (min-width: 880px) {
    margin-top: 100px;
    margin-left: 115px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 100px;
  left: 0px;
  height: 90vh;
  width: 100%;
  background-image: url(${mainPicture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

export const Title = styled.h1`
margin-top: -40px;
  color: white;
  font-size: 40px;

  @media screen and (max-width: 480px) {
    width: 240px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 30px;
`;
export const Button = styled.button`
  position: block;
  top: 450px;
  transform: translateY(100%); 
  width: 168px;
  height: 44px;
  border-radius: 12px;
  color: white;
  background-color: rgba(1, 1, 1, 0);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  transition: background-color 0.3s ease, box-shadow 0.5s ease, border 0.5s ease;
  overflow: hidden;
  border: 1px solid;
  border-color: gold;
  cursor: pointer;

  &:hover,
  &:active {
    border-radius: 10px;
    transition: all 0.3s ease 0.5s, border 0.5s ease;
    -webkit-transition: all 0.2s ease 0.2s;
    -moz-transition: all 0.2s ease 0.2s;
    -ms-trasition: all 0.2s ease 0.2s;
    -o-transition: all 0.2s ease 0.2s;
    -webkit-box-shadow: 0 0 40px rgba(255, 223, 0, 0.6);
    box-shadow: 0 0 40px rgba(255, 223, 0, 0.6);
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 223, 0, 0.6),
      transparent
    );
    top: 0;
    left: -100%;
    animation: wave-animation 2s infinite linear;
  }

  &:not(:hover)::before {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 223, 0, 0.6),
      transparent
    );
  }

  @keyframes wave-animation {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;
