import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingMoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-top: 0px;
  padding-top: ${p => p.theme.space[0]}px;

  background-color: ${p => p.theme.colors.backgroundBlueFirst};

  @media screen and (min-width: 625px) {
    margin-top: 90px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: 0;
  margin-bottom: ${p => p.theme.space[3]}px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
  font-size: 1.3em;
  line-height: 0.7em;
  outline: none;
  animation: animate 8s linear infinite;
`;

export const MovieCard = styled(Link)`
  background: ${p => p.theme.colors.backgroundBlueSecond};
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  width: 100%;
  max-width: 200px;
  margin: 0.5em;
  border-radius: 10px;
  display: inline-block;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgb(0 0 0 / 8%);
  }
`;

export const MovieImage = styled.img`
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  height: 260px;
  width: 100%;
  display: block;
  border-top-left-radius: ${p => p.theme.space[2]}px;
  border-top-right-radius: ${p => p.theme.space[2]}px;
`;

export const MovieTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: ${p => p.theme.space[1]}px;
  margin: ${p => p.theme.space[0]}px;
`;

export const MovieTitle = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.white};
  text-align: center;
`;
