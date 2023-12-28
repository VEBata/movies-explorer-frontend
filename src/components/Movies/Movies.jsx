import React, { useEffect, useState } from 'react';
import { SearchForm } from '../Atoms/SearchForm/SearchForm';
import { MoviesCards } from './MoviesCards/MoviesCards';
import * as movieApi from '../../utils/MoviesApi';
import { filterByDuration, filterMovies } from "../../utils/MoviesFilter";
import './MoviesCards/MoviesCards.css';
import './Movies.css'

export const Movies = ({ onSaveMovie, onDeleteMovie, savedMovies }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);

  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isResultStatus, setResultStatus] = useState(false);

  useEffect(() => {
    setIsCheckboxActive(localStorage.getItem('shortMovies') === 'true');
  }, []);

  useEffect(() => {
    if (!movies.length) {
      setIsLoading(true);
      movieApi.getMovies()
        .then(data => {
          setMovies(data);
          localStorage.setItem('allMovies', JSON.stringify(data));
          setFilteredMoviesList(isCheckboxActive ? filterByDuration(data) : data);
        })
        .catch(err => {
          console.error(`Error fetching movies: ${err}`);
          setResultStatus(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, [movies, isCheckboxActive]);

  useEffect(() => {
    setIsNotFound(filteredMoviesList.length === 0);
  }, [filteredMoviesList]);

  const handleSearchMovies = (searchRequest) => {
    if (searchRequest.trim().length === 0) {
      setFilteredMoviesList(movies);
    } else {
      const foundMovies = filterMovies(movies, searchRequest);
      setFilteredMoviesList(isCheckboxActive ? filterByDuration(foundMovies) : foundMovies);
    }
    localStorage.setItem('movieSearch', searchRequest);
  };

  const handleFilter = () => {
    setIsCheckboxActive(!isCheckboxActive);
    localStorage.setItem('shortMovies', JSON.stringify(!isCheckboxActive));
    if (localStorage.getItem('shortMovies') === 'true') {
      setFilteredMoviesList(filterByDuration(movies));
    } else {
      setFilteredMoviesList(movies);
    }
  };

  return (
    <main className='movies'>
      <SearchForm
        onSearch={handleSearchMovies}
        onFilter={handleFilter}
        isCheckboxActive={isCheckboxActive}
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