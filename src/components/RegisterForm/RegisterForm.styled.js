import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const InputWrap = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
  display: block;
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Input = styled(Field)`
  display: block;
  width: 100%;
  margin-bottom: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.small};
  outline: 1px solid ${p => p.theme.colors.black};
`;

export const Error = styled(ErrorMessage)`
  font-size: ${p => p.theme.fontSizes.s};
  color: red;
  padding-left: ${p => p.theme.space[2]}px;
`;

export const Btn = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: ${p => p.theme.radii.normal};

  cursor: pointer;
  transition: background-color 200ms ease-in;
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: ${p => p.theme.space[2]}px;
  }
  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
