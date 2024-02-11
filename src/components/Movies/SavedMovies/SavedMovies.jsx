import { MoviesCards } from '../MoviesCards/MoviesCards';
import { SearchForm } from '../../../components/Atoms/SearchForm/SearchForm';
import { useEffect, useState, useCallback } from 'react';
import { filterByDuration, filterMovies } from '../../../utils/MoviesFilter';
import './SavedMovies.css'
import { useLocalStorageState } from '../../../hooks/useLocalStorageState';

export const SavedMovies = ({ savedMovies, onDeleteMovie }) => {
	const [filteredMoviesList, setFilteredMoviesList] = useState(savedMovies);
	const [isCheckboxActive, setIsCheckboxActive] = useLocalStorageState(false, 'shortMoviesSaved');
	const [isNotFound, setIsNotFound] = useState(false);
	const [searchRequest, setSearchRequest] = useLocalStorageState('', 'searchMoviesSaved');

	const onSearchMovies = useCallback((req) => {
		setSearchRequest(req);
	}, []);

	const handleShortMovies = useCallback(() => {
		setIsCheckboxActive(prevState => !prevState);
	}, []);

	useEffect(() => {
		const moviesList = filterMovies(savedMovies, searchRequest);
		setFilteredMoviesList(isCheckboxActive ? filterByDuration(moviesList) : moviesList);
	}, [savedMovies, isCheckboxActive, searchRequest]);

	useEffect(() => {
		setIsNotFound(filteredMoviesList.length === 0);
	}, [filteredMoviesList]);

	return (
		<main className='saved-movies'>
			<SearchForm
				onSearch={onSearchMovies}
				searchValue={searchRequest}
				isCheckboxActive={isCheckboxActive}
				onFilter={handleShortMovies} />
			<MoviesCards
				savedMovies={savedMovies}
				isNotFound={isNotFound}
				isSavedFilms={true}
				filteredMoviesList={filteredMoviesList}
				onDeleteMovie={onDeleteMovie}
			/>
		</main>
	)
}