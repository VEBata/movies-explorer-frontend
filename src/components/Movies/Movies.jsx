import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import cardImage from '../../images/card-image.jpg';

const Movies = () => {
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
				<MoviesCard
					link={cardImage}
					alt="Карточка"
					title="Баския: Взрыв реальности"
					duration="1ч 21м"
				/>
				<MoviesCard
					link={cardImage}
					alt="Карточка"
					title="Бег это свобода"
					duration="1ч 44м"
				/>
				<MoviesCard
					link={cardImage}
					alt="Карточка"
					title="Книготорговцы"
					duration="1ч 37м"
				/>
				<MoviesCard
					link={cardImage}
					alt="Карточка"
					title="Когда я думаю о Германии ночью"
					duration="1ч 56м"
				/>
				<MoviesCard
					link={cardImage}
					alt="Карточка"
					title="Gimme Danger. История Игги и The Stooges"
					duration="1ч 59м"
				/>
				<MoviesCard
					link={cardImage}
					alt="Карточка"
					title="Дженис: Маленькая девочка грустит"
					duration="1ч 42м"
				/>
				<MoviesCard
					link={cardImage}
					alt="Карточка"
					title="Соберись перед прыжком"
					duration="1ч 10м"
				/>
				<MoviesCard
					link={cardImage}
					alt="Карточка"
					title="Пи Джей Харви: A dog called money"
					duration="1ч 4м"
				/>
				<MoviesCard
					link={cardImage}
					alt="Карточка"
					title="По волнам: Искусство звука в кино"
					duration="1ч 7м"
				/>
			</MoviesCardList>
			<div className="button-wrapper">
				<button
					className="button-load button"
					type='button'
				>
					Ещё
				</button>
			</div>
		</main>
	);
}

export default Movies;