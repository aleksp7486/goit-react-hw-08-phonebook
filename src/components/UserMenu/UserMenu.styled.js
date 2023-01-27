import styled from 'styled-components';

export const Name = styled.p`
  margin-right: ${p => p.theme.space[3]}px;
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
