import React from 'react';
import { useLocation } from 'react-router-dom';

export const MoviesCard = ({ movie, isSavedFilms, onSaveMovie, onDeleteMovie, savedMovies }) => {
  const location = useLocation().pathname;
  const isSaved = location === '/movies' ? savedMovies.some((savedMovie) => savedMovie.movieId === movie.id) : savedMovies.some((savedMovie) => savedMovie.movieId === movie.movieId);
  const savedMovie = location === '/movies' ? savedMovies.find((savedMovie) => savedMovie.movieId === movie.id) : savedMovies.find((savedMovie) => savedMovie.movieId === movie.movieId);

  const handleMovieAction = () => {
    isSaved ? onDeleteMovie(savedMovie) : onSaveMovie(movie);
  };

  const convertDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return hours ? `${hours}ч ${minutes}м` : `${minutes}м`;
  };

  return (
    <li className='card' id={movie.movieId}>
      <a href={movie.trailerLink} className="movie__link card__link" target="_blank" rel="noreferrer">
        <img
          className="card__image"
          src={isSavedFilms ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`}
          alt={movie.nameRU} />
      </a>
      <div className='card__container'>
        <a href={movie.trailerLink} className="link card__title" target="_blank" rel="noreferrer">
          {movie.nameRU}
        </a>
        <button
          className={`button card__button ${isSavedFilms ? 'card__button-remove' : `card__button-like ${isSaved && 'card__button-like_active'}`}`}
          type='button'
          onClick={handleMovieAction} />
      </div>
      <p className='card__duration'>{convertDuration(movie.duration)}</p>
    </li>
  );
};
