import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AdditionWrapper = styled.div`
  padding: 0 30px 30px 30px;
  color: ${p => p.theme.colors.white};
`;

export const MovieLinksTitle = styled.h3`
  width: 300px;
  margin: 0 0 30px 0;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
`;

export const MovieLinksWrapper = styled.div`
  display: flex;
  width: 300px;
  gap: ${p => p.theme.space[4]}px;
  justify-content: center;
  padding: 0 0 30px 0;
`;

export const MovieLinks = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.white};
  border-radius: 6px;
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  text-decoration: none;

  :hover,
  :focus {
    color: ${p => p.theme.colors.orangeFirst};
    border-color: ${p => p.theme.colors.orangeFirst};
  }
`;
