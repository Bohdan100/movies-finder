import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

import apiGet from 'service/api';
import { RequestError } from 'components/RequestError';
import defaultImage from 'components/defaultImg/defaultImage.png';

import {
  ActorsGalleryWrapper,
  ActorCard,
  ActorImage,
  ActorDescription,
  ActorDescriptionText,
  MissingCasts,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [castInfo, setCastInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const responseCasts = await apiGet.getActors(movieId);
        if (!responseCasts) {
          return;
        }

        setCastInfo(responseCasts);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [movieId]);

  if (!castInfo) {
    return;
  }

  if (castInfo) {
    animateScroll.scrollMore(400);
  }

  const main_path = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      {castInfo.length > 0 ? (
        <ActorsGalleryWrapper>
          {castInfo.map(({ profile_path, original_name, character, id }) => {
            return (
              <ActorCard key={id}>
                <ActorImage
                  src={
                    profile_path ? `${main_path}${profile_path}` : defaultImage
                  }
                  alt="actor profile"
                />
                <ActorDescription>
                  <ActorDescriptionText>
                    Actor name: {original_name}
                  </ActorDescriptionText>
                  <ActorDescriptionText>
                    Actor character: {character}
                  </ActorDescriptionText>
                </ActorDescription>
              </ActorCard>
            );
          })}
        </ActorsGalleryWrapper>
      ) : (
        <MissingCasts>We don't have any casts for this movie</MissingCasts>
      )}
      {error && <RequestError message={error} />}
    </>
  );
};

export default Cast;
