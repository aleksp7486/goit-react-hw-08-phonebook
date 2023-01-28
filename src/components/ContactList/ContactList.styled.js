import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  line-height: 1;
  overflow: hidden;
`;

export const Icon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accent};
`;

export const Phone = styled.span`
  padding-left: ${p => p.theme.space[3]}px;
`;
