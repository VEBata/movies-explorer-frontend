import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import cardImage from '../../../images/card-image.jpg';

const SavedMovies = () => {

	return (
		<main className="content">
				<SearchForm />
				<MoviesCardList>
					<MoviesCard
						link={cardImage}
						alt="Карточка"
						title="33 слова о дизайне"
						duration="1ч 47м"
					/>
					<MoviesCard
						link={cardImage}
						alt="Карточка"
						title="Киноальманах «100 лет дизайна»"
						duration="1ч 3м"
					/>
					<MoviesCard
						link={cardImage}
						alt="Карточка"
						title="В погоне за Бенкси"
						duration="1ч 42м"
					/>
				</MoviesCardList>
		</main>
	)
}

export default SavedMovies;