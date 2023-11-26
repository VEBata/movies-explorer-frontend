import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { filterByDuration, filterMovies } from '../../../utils/MoviesFilter';


const SavedMovies = ({ savedMovies, onDeleteMovie }) => {
	const [filteredMoviesList, setFilteredMoviesList] = useState(savedMovies);
	const [isCheckboxActive, setIsCheckboxActive] = useState(false);
	const [isNotFound, setIsNotFound] = useState(false);
	const [searchRequest, setSearchRequest] = useState('');

	const onSearchMovies = (req) => {
		setSearchRequest(req);
	}

	const handleShortMovies = () => {
		setIsCheckboxActive(!isCheckboxActive);
	}

	useEffect(() => {
		const moviesList = filterMovies(savedMovies, searchRequest);
		setFilteredMoviesList(isCheckboxActive ? filterByDuration(moviesList) : moviesList);
	}, [savedMovies, isCheckboxActive, searchRequest]);

	useEffect(() => {
		if (filteredMoviesList.length === 0) {
			setIsNotFound(true);
		} else {
			setIsNotFound(false);
		}
	}, [filteredMoviesList]);

	return (
		<main className="content">
			<SearchForm
				onSearch={onSearchMovies}
				onFilter={handleShortMovies} />
			<MoviesCardList
				savedMovies={savedMovies}
				isNotFound={isNotFound}
				isSavedFilms={true}
				filteredMoviesList={filteredMoviesList}
				onDeleteMovie={onDeleteMovie}
			/>
		</main>
	)
}

export default SavedMovies;