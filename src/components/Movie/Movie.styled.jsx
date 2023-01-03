import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PosterWrapper = styled.div`
  @media screen and (min-width: 550px) {
    background: url(${props => props.photo}) 70% 0%;

    position: ${p => p.theme.position.relative};
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    color: ${p => p.theme.colors.white};
    display: flex;
    height: 50vh;
    justify-content: ${p => p.theme.position.center};
  }
`;

export const BackLinkButton = styled(Link)`
  width: 100px;
  height: 50px;
  padding: ${p => p.theme.space[0]}px;

  z-index: 100;
  position: ${p => p.theme.position.fixed};
  left: 232px;
  top: ${p => p.theme.space[1]}px;

  display: flex;
  align-items: ${p => p.theme.position.center};
  justify-content: ${p => p.theme.position.center};

  background: transparent;
  color: ${p => p.theme.colors.white};
  box-shadow: 0 0 25px rgb(0 0 0 / 10%), inset 0 0 1px rgb(255 255 255 / 60%);

  outline: inherit;
  border-radius: ${p => p.theme.radii.round};
  text-align: ${p => p.theme.position.center};
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  font-family: 'Amatic SC', cursive;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 50px;
  font-weight: 500;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: ${p => p.theme.colors.orangeFirst};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  padding: 0 30px 30px 30px;
  color: ${p => p.theme.colors.white};

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const MovieImage = styled.img`
  width: 300px;
  height: 450px;
  margin-top: ${p => p.theme.space[8]}px;

  @media screen and (min-width: 550px) {
    margin-top: ${p => p.theme.space[3]}px;
  }
`;

export const MovieTextWrapper = styled.div`
  padding-left: ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${p => p.theme.colors.white};
`;

export const MovieTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.orangeFirst};

  @media screen and (max-width: 360px) {
    text-align: center;
  }
`;

export const MovieDate = styled.p`
  margin-bottom: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const MovieRatingWrapper = styled.p`
  display: flex;
`;

export const MovieRating = styled.span`
  margin-left: ${p => p.theme.space[2]}px;
  width: 50px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.orangeFirst};
  display: flex;
  justify-content: ${p => p.theme.position.center};
  box-shadow: 0 10px 20px ${p => p.theme.colors.orangeFirst};
`;

export const OverviewTitle = styled.p`
  margin-bottom: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.orangeFirst};
`;

export const OverviewText = styled.p`
  margin-bottom: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};

  @media screen and (min-width: 1200px) {
    width: 800px;
  }
`;

export const GenresTitle = styled.p`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.orangeFirst};
`;

export const GenresList = styled.ul`
  margin: 0 0 0 10px;
  padding: ${p => p.theme.space[0]}px;

  font-size: 14px;
  line-height: 17px;
`;

export const GenresListItem = styled.li`
  color: ${p => p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
`;
