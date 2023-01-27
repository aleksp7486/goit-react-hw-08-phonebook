import styled from 'styled-components';
export const Board = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  border-radius: ${p => p.theme.radii.small};
  outline: 1px solid ${p => p.theme.colors.black};
`;
