import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import apiGet from 'service/api';
import { SearchMoviesList } from 'components/SearchMoviesList';
import { RequestError } from 'components/RequestError';

import {
  MainWrapper,
  SearchFormWrapper,
  SearchForm,
  SearchInput,
  SearchButton,
} from './Movies.styled';

const Movies = () => {
  const [searchMoviesList, setSearchMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('name') ?? '';

  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const searchValue = e.target.searchInput.value.trim().toLowerCase();

    if (searchValue === '') {
      toast.warn('Please enter a valid search term!');
      return;
    }

    setSearchParams({ name: searchValue });
  };

  useEffect(() => {
    if (!searchName) {
      setSearchMoviesList([]);
      return;
    }

    (async () => {
      try {
        const responseMovies = await apiGet.getMoviesByName(searchName);
        if (!responseMovies) {
          return;
        }

        setSearchMoviesList(responseMovies);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [searchName]);

  return (
    <MainWrapper>
      <SearchFormWrapper>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies by name"
            name="searchInput"
          />

          <SearchButton type="submit">
            <AiOutlineSearch />
          </SearchButton>
        </SearchForm>
      </SearchFormWrapper>
      {searchMoviesList.length > 0 && (
        <SearchMoviesList searchMovies={searchMoviesList} />
      )}
      {error && <RequestError />}
    </MainWrapper>
  );
};

export default Movies;
