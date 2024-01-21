import styled from 'styled-components';

export const Overlay = styled.div`
  margin: auto;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--light-text);
  backdrop-filter: blur(2px);
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  border-radius: 14px;
  background-color: white;
  padding: 40px 20px;
  width: 380px;
  max-height: 90vh;
  overflow: auto;

  @media screen and (min-width: 760px) {
    width: 541px;
    max-height: 752px;
    margin-top: 0;
    padding: 40px;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 999;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 248px;
  border-radius: 14px;
  margin-left: 35px;
`;

export const InfoWrap = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;
  margin-left: 35px;
`;

export const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 8px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: var(--dark-text);
`;

export const Span = styled.span`
  color: var(--normal-bg);
`;

export const InfoLine = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoItem = styled.li`
  font-size: 12px;
  color: var(--light-text);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: var(--shadow-text-2);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const Description = styled.p`
  line-height: 1.43;
  margin-top: 14px;
  width: 300px;

  @media screen and (min-width: 760px) {
    width: 461px;
  }
`;

export const InfoTitle = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: var(--dark-text);
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  letter-spacing: -0.24px;
  width: 300px;

  @media screen and (min-width: 760px) {
    width: 461px;
  }
`;

export const ConditionItem = styled.li`
  border-radius: 35px;
  color: var(--condition-text);
  background-color: var(--white-bg);
  padding: 7px 14px;
`;

export const SpanCondition = styled.span`
  color: var(--normal-bg);
  font-weight: 600;
`;

export const Button = styled.a`
  width: 168px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;

  border-radius: 12px;
  background-color: var(--normal-bg);
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: var(--active-bg);
  }
`;
