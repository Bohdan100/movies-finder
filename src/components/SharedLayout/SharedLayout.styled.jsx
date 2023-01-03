import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SharedLayoutWrapper = styled.header`
  display: flex;
  justify-content: space-between;

  position: ${p => p.theme.position.fixed};
  width: 100%;
  z-index: 100;
  background-image: linear-gradient(
    to right top,
    ${p => p.theme.colors.grayFirst} 0%,
    ${p => p.theme.colors.backgroundBlueSecond} 100%
  );
`;

export const Logo = styled.img`
  width: 0;
  height: 0;
  margin: 0;

  @media screen and (min-width: 410px) {
    width: auto;
    height: auto;
    margin-right: ${p => p.theme.space[3]}px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: ${p => p.theme.position.center};
  height: 60px;
  background-color: ${p => p.theme.colors.backgroundBlueThird};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  padding: 0 0 5px 10px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 25%,
    rgba(255, 255, 255, 0.2) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 0 0 25px rgb(0 0 0 / 10%), inset 0 0 1px rgb(255 255 255 / 60%);
`;

export const NavigationLink = styled(NavLink)`
  width: 100px;
  height: 50px;

  background: none;
  color: inherit;
  border: ${p => p.theme.borders.none};
  padding: ${p => p.theme.space[0]}px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  position: ${p => p.theme.position.relative};

  display: flex;
  align-items: ${p => p.theme.position.center};
  justify-content: ${p => p.theme.position.center};
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: ${p => p.theme.radii.round};
  color: ${p => p.theme.colors.white};
  box-shadow: 0 0 25px rgb(0 0 0 / 10%), inset 0 0 1px rgb(255 255 255 / 60%);
  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
  -webkit-box-reflect: below -3px linear-gradient(transparent, #0005);

  font-size: 15px;
  line-height: 50px;
  margin-right: 10px;

  &:hover {
    background-color: ${p => p.theme.colors.orangeFirst};
    box-shadow: 0 0 5px ${p => p.theme.colors.orangeFirst},
      0 0 5px ${p => p.theme.colors.orangeFirst},
      0 0 5px ${p => p.theme.colors.orangeFirst},
      0 0 5px ${p => p.theme.colors.orangeFirst};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
  }
  &.active {
    color: ${p => p.theme.colors.greenFirst};
    font-weight: bold;
    font-size: 20px;
    box-shadow: 0 0 25px rgb(0 0 0 / 10%), inset 0 0 1px rgb(255 255 255 / 60%);
  }
`;
