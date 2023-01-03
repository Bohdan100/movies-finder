import styled from 'styled-components';

export const ActorsGalleryWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[0]}px;
`;

export const ActorCard = styled.li`
  width: 100%;
  max-width: 200px;
  height: 240px;
  display: inline-block;

  background: ${p => p.theme.colors.grayFirst};
  color: ${p => p.theme.colors.white};
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);

  margin-bottom: ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.highRound};
  text-decoration: none;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgb(0 0 0 / 8%);
  }
`;

export const ActorImage = styled.img`
  width: 100%;
  height: 260px;

  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;

  display: block;
  border-top-left-radius: ${p => p.theme.radii.highRound};
  border-top-right-radius: ${p => p.theme.radii.highRound};
`;

export const ActorDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[1]}px;

  padding: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const ActorDescriptionText = styled.h3`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
`;

export const MissingCasts = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.bold};

  color: ${p => p.theme.colors.orangeFirst};
`;
