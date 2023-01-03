import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  position: relative;
  font-size: 1.3em;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
  line-height: 0.7em;
  outline: none;
  animation: animate 8s linear infinite;
`;

export const TrendingMoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding-top: 90px;

  background-color: ${p => p.theme.colors.backgroundBlueFirst};
`;

export const MovieCard = styled(Link)`
  width: 100%;
  max-width: 200px;
  display: inline-block;
  margin: 0.5em;
  background: ${p => p.theme.colors.backgroundBlueSecond};
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgb(0 0 0 / 8%);
  }
`;

export const MovieImage = styled.img`
  display: block;
  width: 100%;
  height: 260px;

  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;

  border-top-left-radius: ${p => p.theme.space[2]}px;
  border-top-right-radius: ${p => p.theme.space[2]}px;
`;

export const MovieTextWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: ${p => p.theme.space[1]}px;
  margin: ${p => p.theme.space[0]}px;
`;

export const MovieTitle = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.white};
  text-align: center;
`;
