import styled from 'styled-components';

export const Button = styled.button`
  width: 79px;
  color: var(--normal-bg);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  margin: 100px auto 150px;
  display: block;
  background-color: white;

  &:hover {
    color: var(--active-bg);
  }
`;
