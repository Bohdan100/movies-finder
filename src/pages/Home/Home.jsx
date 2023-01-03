import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import apiGet from 'service/api';
import { RequestError } from 'components/RequestError';

import {
  Title,
  TrendingMoviesWrapper,
  MovieCard,
  MovieImage,
  MovieTextWrapper,
  MovieTitle,
} from './Home.styled';

import defaultMovie from 'components/defaultImg/defaultMovie.png';

const Home = () => {
  const location = useLocation();

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const responseMovies = await apiGet.getTrending();
        if (!responseMovies) {
          return;
        }

        setTrendingMovies(responseMovies);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  const main_path = 'https://image.tmdb.org/t/p/w500';

  return (
    <TrendingMoviesWrapper>
      <Title>TRENDING MOVIES</Title>

      {trendingMovies.map(({ title, poster_path, name, id }) => {
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
      {error && <RequestError message={error} />}
    </TrendingMoviesWrapper>
  );
};
export default Home;
