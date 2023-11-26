import './MoviesCard.css';
//import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ movie, isSavedFilms, onSaveMovie, onDeleteMovie, savedMovies }) => {
	const location = useLocation().pathname;
	const isSaved = savedMovies.some((saveMovie) => saveMovie.movieId === movie.id);

	const handleSaveMovie = () => {
		if (isSaved) {
			onDeleteMovie(movie);
		} else {
			onSaveMovie(movie);
		}
	};

	const handleDeleteMovie = () => {
		onDeleteMovie(movie);
	}

	const convertDuration = (duration) => {
		const hours = Math.floor(duration / 60);
		const minutes = duration % 60;

		if (hours > 0) {
			return `${hours}ч ${minutes}м`;
		} else {
			return `${minutes}м`;
		}
	}

	return (
		<li className="card" id={movie.id}>
			<a href={movie.trailerLink} className="movie__link" target="_blank" rel="noreferrer">
				<img
					className="card__image"
					src={isSavedFilms ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`}
					alt={movie.nameRU}
				/>
			</a>
			<div className="card__container">
				<a href={movie.trailerLink} className="link card__title" target="_blank" rel="noreferrer">{movie.nameRU}</a>
				<button
					className={`button card__btn ${location.includes('saved') ?
						'card__button-remove' : `card__button-like
						${isSaved && "card__button-like_active"}
						`}
					`}
					type='button'
					onClick={
						location.includes('saved')
						? () => {
							handleDeleteMovie(movie);
						} : () => {
							handleSaveMovie(movie);
						}
					}
				/>
			</div>
			<p className="card__duration">{convertDuration(movie.duration)}</p>
		</li >
	)
}

export default MoviesCard;