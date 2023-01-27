import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
  text-decoration: none;
  font-weight: 700;
  transition: transform 200ms ease-in, color 200ms ease-in;
  :hover:not(.active) {
    transform: scale(1.05);
    color: ${p => p.theme.colors.secondary};
  }
  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;
