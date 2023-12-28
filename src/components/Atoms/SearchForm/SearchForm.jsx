import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { EMPTY_REQUEST, MOVIE_TITLE } from '../../../utils/Constants';
import './SearchForm.css';

export const SearchForm = ({ onSearch, onFilter, isCheckboxActive }) => {
  const location = useLocation().pathname;
  const [searchValue, setSearchValue] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (location === '/saved-movies') {
      setSearchValue('');
    }
  }, [location]);

  const changeSearch = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);
    onSearch(searchValue);
  }

  return (
    <section className='search'>
      <div
        className='search__container'
        name="search-movie"
        noValidate
      >
        <div className='search__form'>
          <input className='search__input'
            type="text"
            name='search'
            value={searchValue || ""}
            placeholder={isError ? EMPTY_REQUEST : MOVIE_TITLE}
            onChange={changeSearch}
            required
          />
          <button className='search__submit-button' onClick={handleSubmit} />
        </div>
        <FilterCheckbox
          title="Короткометражки"
          onFilter={onFilter}
          isActive={isCheckboxActive}
        />
        <div className='search__line' />
      </div>
    </section>
  );
}