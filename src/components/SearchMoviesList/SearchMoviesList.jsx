import { useLocation } from 'react-router-dom';

import {
  Title,
  TrendingMoviesWrapper,
  MovieCard,
  MovieImage,
  MovieTextWrapper,
  MovieTitle,
} from './SearchMoviesList.styled';

import defaultMovie from 'components/defaultImg/defaultMovie.png';

export const SearchMoviesList = ({ searchMovies }) => {
  const location = useLocation();
  const main_path = 'https://image.tmdb.org/t/p/w500';

  return (
    <TrendingMoviesWrapper>
      <Title>SEARCH MOVIES</Title>
      {searchMovies.map(({ title, poster_path, name, id }) => {
        return (
          <MovieCard key={id} to={`/movies/${id}`} state={{ from: location }}>
            <MovieImage
              src={poster_path ? `${main_path}${poster_path}` : defaultMovie}
              alt="Film's poster"
              id={id}
            />
            <MovieTextWrapper>
              <MovieTitle>{title || name}</MovieTitle>
            </MovieTextWrapper>
          </MovieCard>
        );
      })}
    </TrendingMoviesWrapper>
  );
};
