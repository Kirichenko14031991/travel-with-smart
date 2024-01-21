import styled from 'styled-components';

export const CardWrap = styled.div`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 274px; 
  height: 274px;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  padding: 0;
  border: none;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background: none;
  cursor: pointer;
`;

export const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--dark-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; 
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  color: var(--dark-text);
`;

export const Span = styled.span`
  color:  var(--normal-bg);
`;

export const InfoWrap = styled.div`
  width: 274px;
`;

export const InfoLine = styled.ul`
  display: flex;
  text-align: left;
  color: var(--light-text);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 4px; 
`;

export const InfoItem = styled.li`
  display: flex;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: var(--shadow-text-2);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--normal-bg);
  color:  white;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-top: auto;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover,
  &.active {
    background-color: var(--active-bg);
  }
`;