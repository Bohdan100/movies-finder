import { useLocation } from 'react-router-dom';

import {
  PosterWrapper,
  BackLinkButton,
  MovieDetailsWrapper,
  MovieImage,
  MovieTextWrapper,
  MovieTitle,
  MovieDate,
  MovieRatingWrapper,
  MovieRating,
  OverviewTitle,
  OverviewText,
  GenresTitle,
  GenresList,
  GenresListItem,
} from './Movie.styled';

const Movie = ({
  movieData: {
    backdrop_path,
    title,
    original_title,
    vote_average,
    poster_path,
    release_date,
    overview,
    genres,
  },
}) => {
  const location = useLocation();
  const image_path = 'https://image.tmdb.org/t/p/w500';
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <PosterWrapper photo={backdrop_path && `${image_path}${backdrop_path}`}>
        <BackLinkButton to={backLinkHref}>Back</BackLinkButton>
      </PosterWrapper>
      <MovieDetailsWrapper>
        <MovieImage
          src={poster_path && `${image_path}${poster_path}`}
          alt={title}
        />
        <MovieTextWrapper>
          <MovieTitle>{title || original_title}</MovieTitle>
          <MovieDate>({release_date})</MovieDate>
          <MovieRatingWrapper>
            User score:{' '}
            <MovieRating>
              {vote_average && Number(vote_average).toFixed(1)}
            </MovieRating>
          </MovieRatingWrapper>
          <OverviewTitle>Overview:</OverviewTitle>
          <OverviewText>
            {overview || 'There is no description of this film'}
          </OverviewText>
          <GenresTitle>Genres:</GenresTitle>
          <GenresList>
            {genres.length > 0 &&
              genres.map(({ id, name }) => (
                <GenresListItem key={id}>{name}</GenresListItem>
              ))}
          </GenresList>
        </MovieTextWrapper>
      </MovieDetailsWrapper>
    </>
  );
};
export default Movie;
