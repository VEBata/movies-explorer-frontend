import React, { useEffect, useState } from 'react';
import { SearchForm } from '../Atoms/SearchForm/SearchForm';
import { MoviesCards } from './MoviesCards/MoviesCards';
import { filterByDuration, filterMovies } from "../../utils/MoviesFilter";
import './MoviesCards/MoviesCards.css';
import './Movies.css'
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

export const Movies = ({ onSaveMovie, onDeleteMovie, savedMovies, movies, isLoading }) => {
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [isCheckboxActive, setIsCheckboxActive] = useLocalStorageState(false, 'shortMovies');
  const [search, setSearch] = useLocalStorageState('', 'searchMovies')
  const [isNotFound, setIsNotFound] = useState(false);
  const [isResultStatus, setResultStatus] = useState(false);

  useEffect(() => {
    const filtered = filterMovies(movies, search)
    setFilteredMoviesList(isCheckboxActive ? filterByDuration(filtered) : filtered);
  }, [isCheckboxActive, search, movies]);

  useEffect(() => {
    setIsNotFound(filteredMoviesList.length === 0);
  }, [filteredMoviesList]);

  const handleSearchMovies = (searchRequest) => {
    setSearch(searchRequest)
  };

  const handleFilter = () => {
    setIsCheckboxActive(!isCheckboxActive);
  };

  return (
    <main className='movies'>
      <SearchForm
        onSearch={handleSearchMovies}
        onFilter={handleFilter}
        isCheckboxActive={isCheckboxActive}
        searchValue={search}
      />
      <MoviesCards
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        filteredMoviesList={filteredMoviesList}
        isSavedFilms={false}
        isNotFound={isNotFound}
        isResultStatus={isResultStatus}
        isLoading={isLoading}
        savedMovies={savedMovies}
      />
    </main>
  );
};