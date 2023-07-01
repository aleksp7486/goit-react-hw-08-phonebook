import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  transition: background-color 200ms linear;
  span {
    display: inline-flex;
    justify-content: center;
    margin-right: ${p => (p.children[1] ? p.theme.space[2] : 0)}px;
  }
  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
