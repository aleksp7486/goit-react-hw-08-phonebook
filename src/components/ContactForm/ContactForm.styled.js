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
  position: relative;
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
