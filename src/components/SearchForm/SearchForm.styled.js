import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-top: 65px;

  @media screen and (min-width: 880px) {
    flex-direction: row;
    align-items: flex-end;
    gap: 18px;
  }
`;

export const BrandPriceWrap = styled.div`
  display: flex;
  gap: 18px;
`;

export const InputMileageWrap = styled.div`
  display: flex;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--label-text);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  position: relative;
`;

export const InputMileageText = styled.p`
  position: absolute;
  top: 40px;
  left: 22px;
  color: var(--dark-text);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

const inputStyles = `
  width: 160px;
  padding: 13px 0 13px 88px;
  font-size: 18px;
  border: 1px solid transparent;
  background-color: var(--input-bg);
  color: var(--dark-text);
  font-weight: 500;
  line-height: 20px;
  margin-top: 8px;

  &::placeholder {
    opacity: 1;
  }

  &:hover {
    border-color: var(--shadow-text-1);
  }
  &:focus {
    outline: none;
    border-color: var(--normal-bg);
  }
`;

export const CustomInputLeft = styled.input`
  ${inputStyles}
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid var(--border-text);
  margin-left: 0px;
`;

export const CustomInputRight = styled.input`
  ${inputStyles}
  border-radius: 0px 14px 14px 0px;
  margin-right: 0px;
`;

export const ButtonResetWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 20px;

  @media screen and (min-width: 880px) {
    margin-top: 0;
  }
`;

export const StyledButton = styled.button`
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background-color: var(--normal-bg);
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--active-bg);
  }
`;
