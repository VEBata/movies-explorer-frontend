import "./SearchForm.css";
import FilterCheckbox from "../../UI/FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="search-form__form" name="search-movie">
        <div className="search-form__form-container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="search-form__submit-button button" type="submit" />
        </div>
        <FilterCheckbox title="Короткометражки" />
        <div className="search-form__line" />
      </form>
    </section>
  );
};

export default SearchForm;
