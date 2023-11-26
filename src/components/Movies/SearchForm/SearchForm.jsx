import './SearchForm.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../../UI/FilterCheckbox/FilterCheckbox';
import { EMPTY_REQUEST, MOVIE_TITLE } from '../../../utils/Constants';

const SearchForm = ({ onSearch, onFilter, isCheckboxActive }) => {
	const location = useLocation().pathname;
	const [searchValue, setSearchValue] = useState("");
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (location === '/movies') {
			setSearchValue(localStorage.getItem('movieSearch'));
		}
		if (location === '/saved-movies') {
			setSearchValue('');
		}
	}, [location]);

	const changeSearch = (e) => {
		setSearchValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchValue.trim().length === 0) {
			setIsError(true);
		} else {
			setIsError(false);
			onSearch(searchValue);
		}
	}

	return (
		<section className="search-form">
			<form
				className="search-form__form"
				name="search-movie"
				onSubmit={handleSubmit}
				noValidate
			>
				<div className="search-form__form-container">
					<input
						className="search-form__input"
						type="text"
						name='search'
						value={searchValue || ""}
						placeholder={isError ? EMPTY_REQUEST : MOVIE_TITLE}
						onChange={changeSearch}
						required
					/>
					<button
						className="search-form__submit-button button"
						type='submit'
					/>
				</div>
				<FilterCheckbox
					title="Короткометражки"
					onFilter={onFilter}
					isActive={isCheckboxActive}
				/>
				<div className='search-form__line' />
			</form>
		</section>
	);
}

export default SearchForm;