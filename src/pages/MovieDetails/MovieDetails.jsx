import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';

import apiGet from 'service/api';
import { RequestError } from 'components/RequestError';

import Movie from 'components/Movie/Movie';
import {
  AdditionWrapper,
  MovieLinksWrapper,
  MovieLinksTitle,
  MovieLinks,
} from './MovieDetails.styled';

import { Circles } from 'react-loader-spinner';
import { SpinerWrapper } from 'App/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const movieAttributes = await apiGet.movieById(movieId);

        if (!movieAttributes) {
          return;
        }

        setMovie(movieAttributes);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      {movie && <Movie movieData={movie} />}

      {movie && (
        <AdditionWrapper>
          <MovieLinksTitle>Additional information</MovieLinksTitle>
          <MovieLinksWrapper>
            <MovieLinks to="cast" state={{ from: backLinkHref }}>
              Cast
            </MovieLinks>
            <MovieLinks to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </MovieLinks>
          </MovieLinksWrapper>
        </AdditionWrapper>
      )}
      {error && <RequestError message={error} />}

      <Suspense
        fallback={
          <SpinerWrapper>
            <Circles
              height="80"
              width="80"
              color="#ff6b08"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </SpinerWrapper>
        }
      >
        <Outlet context={{ movieId, movie }} />
      </Suspense>
    </>
  );
};

export default MovieDetails;
