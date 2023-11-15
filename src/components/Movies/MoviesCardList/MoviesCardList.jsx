import './MoviesCardList.css';

const MoviesCardList = ({ children }) => {

	return (
		<section className="cards">
			<ul className='cards__list'>{children}</ul>
		</section>
	);
}

export default MoviesCardList;