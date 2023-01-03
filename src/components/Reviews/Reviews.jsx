import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

import apiGet from 'service/api';
import { RequestError } from 'components/RequestError';

import {
  ReviewsWrapper,
  AuthorPostDescription,
  DatePostDescription,
  PostDescription,
  MissingReviews,
} from './Reviews.styled';

const Reviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState(null);
  const [error, setError] = useState(null);

  const { movieId, movie } = useOutletContext();

  useEffect(() => {
    (async () => {
      try {
        const responseReviews = await apiGet.getReviews(movieId);
        if (!responseReviews) {
          return;
        }

        setReviewsInfo(responseReviews);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [movieId]);

  if (!reviewsInfo) {
    return;
  }

  if (reviewsInfo) {
    animateScroll.scrollMore(400);
  }

  const main_path = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      {reviewsInfo.length > 0 ? (
        <ReviewsWrapper poster={`${main_path}${movie.backdrop_path}`}>
          {reviewsInfo.map(
            ({ id, author, content, created_at, updated_at }) => (
              <li key={id}>
                <AuthorPostDescription>Author: {author}</AuthorPostDescription>

                <DatePostDescription>
                  Date:{' '}
                  {created_at || updated_at
                    ? new Date(created_at || updated_at).toLocaleDateString()
                    : 'No information'}
                </DatePostDescription>

                <PostDescription>{content}</PostDescription>
              </li>
            )
          )}
        </ReviewsWrapper>
      ) : (
        <MissingReviews>
          We don't have any reviews for this movie
        </MissingReviews>
      )}
      {error && <RequestError message={error} />}
    </>
  );
};

export default Reviews;
