import './Movies.css';
import { useEffect, useState } from 'react';
import { filterByDuration, filterMovies } from "../../utils/MoviesFilter";
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import * as moviesApi from '../../utils/MoviesApi'

const Movies = ({ savedMovies, onSaveMovie, onDeleteMovie }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [initialMoviesList, setInitialMoviesList] = useState([]);
	const [filteredMoviesList, setFilteredMoviesList] = useState([]);
	const [isCheckboxActive, setIsCheckboxActive] = useState(false);
	const [isNotFound, setIsNotFound] = useState(false);
	const [isSearching, setIsSearching] = useState(false);
	const [isResultStatus, setResultStatus] = useState(false);

	const getFilterMovies = (movies, searchQuery, isCheckbox) => {
		const findedFilms = filterMovies(movies, searchQuery, isCheckbox);
		setInitialMoviesList(findedFilms);
		setFilteredMoviesList(isCheckbox ? filterByDuration(findedFilms) : findedFilms);
		localStorage.setItem('movies', JSON.stringify(findedFilms));
		localStorage.setItem('allMovies', JSON.stringify(movies));
	}

	const handleFilter = () => {
		setIsCheckboxActive(!isCheckboxActive);
		if (!isCheckboxActive) {
			if (filterByDuration(initialMoviesList).length === 0) {
				setFilteredMoviesList(filterByDuration(initialMoviesList));
			} else {
				setFilteredMoviesList(filterByDuration(initialMoviesList));
			}
		} else {
			setFilteredMoviesList(initialMoviesList);
		}
		localStorage.setItem('shortMovies', !isCheckboxActive);
	}

	const handleSearchMovies = (searchRequest) => {
		setIsSearching(searchRequest)
		localStorage.setItem('movieSearch', searchRequest);
		localStorage.setItem('shortMovies', isCheckboxActive);
		if (localStorage.getItem('allMovies')) {
			const movies = JSON.parse(localStorage.getItem('allMovies'));
			getFilterMovies(movies, searchRequest, isCheckboxActive);
		} else {
			setIsLoading(true);
			moviesApi
				.getMovies()
				.then((dataCards) => {
					getFilterMovies(dataCards, searchRequest, isCheckboxActive);
					setResultStatus(false)
				})
				.catch((err) => {
					setResultStatus(true)
					console.log(err);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}

	useEffect(() => {
		if (localStorage.getItem('shortMovies') === 'true') {
			setIsCheckboxActive(true);
		} else {
			setIsCheckboxActive(false);
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem('movies')) {
			const movies = JSON.parse(localStorage.getItem('movies'));
			setInitialMoviesList(movies);
			if (localStorage.getItem('shortMovies') === 'true') {
				setFilteredMoviesList(filterByDuration(movies));
			} else {
				setFilteredMoviesList(movies);
			}
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem('movieSearch')) {
			if (filteredMoviesList.length === 0) {
				setIsNotFound(true);
			} else {
				setIsNotFound(false);
			}
		} else {
			setIsNotFound(false);
		}
	}, [filteredMoviesList]);

	return (
		<main className="content">
			<SearchForm
				onSearch={handleSearchMovies}
				onFilter={handleFilter}
				isCheckboxActive={isCheckboxActive}
			/>
			<MoviesCardList
				savedMovies={savedMovies}
				onSaveMovie={onSaveMovie}
				onDeleteMovie={onDeleteMovie}
				filteredMoviesList={filteredMoviesList}
				isSavedFilms={false}
				isNotFound={isNotFound}
				isResultStatus={isResultStatus}
				isLoading={isLoading}
				isSearching={isSearching}
			/>
		</main>
	);
}

export default Movies;