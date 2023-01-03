import styled from 'styled-components';

export const ReviewsWrapper = styled.ul`
  padding: 30px 30px 30px 30px;
  background: url(${p => p.poster});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const AuthorPostDescription = styled.p`
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[0]}px;

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.orangeFirst};
  text-transform: uppercase;
`;

export const DatePostDescription = styled.p`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[0]}px;

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
`;

export const PostDescription = styled.p`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[7]}px;
  padding: ${p => p.theme.space[0]}px;

  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const MissingReviews = styled.p`
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;

  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.orangeFirst};
`;
