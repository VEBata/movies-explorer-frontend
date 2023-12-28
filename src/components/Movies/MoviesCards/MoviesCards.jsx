import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Preloader } from '../../../components/Preloader/Preloader';
import { NoResultMessage } from '../../../components/NoResultMessage/NoResultMessage';
import {
  NOTHING_FOUND,
  SERVER_ERROR,
  MOVIES_ADD_DESKTOP,
  MOVIES_ADD_MOBILE,
  SCREEN_SIZE_DESKTOP,
  SCREEN_SIZE_TABLET_MAX,
  SCREEN_SIZE_TABLET_MIN,
  SHOW_MOVIES_DESKTOP,
  SHOW_MOVIES_MOBILE,
  SHOW_MOVIES_TABLET
} from '../../../utils/Constants';
import './MoviesCards.css';

const MoviesCard = ({ movie, isSavedFilms, onSaveMovie, onDeleteMovie, savedMovies }) => {
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
          alt={movie.nameRU}
        />
      </a>
      <div className='card__container'>
        <a href={movie.trailerLink} className="link card__title" target="_blank" rel="noreferrer">
          {movie.nameRU}
        </a>
        <button
          className={`button card__button ${isSavedFilms ? 'card__button-remove' : `card__button-like ${isSaved && 'card__button-like_active'}`}`}
          type='button'
          onClick={handleMovieAction}
        />
      </div>
      <p className='card__duration'>{convertDuration(movie.duration)}</p>
    </li>
  );
};

export const MoviesCards = ({ filteredMoviesList, savedMovies, onSaveMovie, onDeleteMovie, isSavedFilms, isNotFound, isResultStatus, isLoading, isSearching, movies }) => {
  const location = useLocation().pathname;
  const [shownMoviesQuantity, setShownMoviesQuantity] = useState(0);

  const updateShownMoviesQuantity = () => {
    const width = window.innerWidth;
    if (width > SCREEN_SIZE_DESKTOP) {
      return SHOW_MOVIES_DESKTOP;
    } else if (width > SCREEN_SIZE_TABLET_MIN && width < SCREEN_SIZE_TABLET_MAX) {
      return SHOW_MOVIES_TABLET;
    } else {
      return SHOW_MOVIES_MOBILE;
    }
  };

  useEffect(() => {
    setShownMoviesQuantity(updateShownMoviesQuantity());
    const handleResize = () => setShownMoviesQuantity(updateShownMoviesQuantity());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSearching]);

  const loadMoreMovies = () => {
    const additionalMovies = window.innerWidth > SCREEN_SIZE_DESKTOP ? MOVIES_ADD_DESKTOP : MOVIES_ADD_MOBILE;
    setShownMoviesQuantity(shownMoviesQuantity + additionalMovies);
  };

  return (
    <section className='cards'>
      {isLoading ? <Preloader /> : (
        <>
          {isNotFound ? <NoResultMessage message={NOTHING_FOUND} /> :
            isResultStatus ? <NoResultMessage message={SERVER_ERROR} /> :
              <>
                {Array.isArray(filteredMoviesList) && (
                  <ul className='cards__list'>
                    {filteredMoviesList.slice(0, shownMoviesQuantity).map((movie) => (
                      <>
                        <MoviesCard
                          movie={movie}
                          key={isSavedFilms ? movie._id : movie.id}
                          onSaveMovie={onSaveMovie}
                          onDeleteMovie={onDeleteMovie}
                          isSavedFilms={isSavedFilms}
                          savedMovies={savedMovies}
                        />
                      </>
                      
                    ))}
                  </ul>
                )}
                {Array.isArray(filteredMoviesList) && filteredMoviesList.length > shownMoviesQuantity && (
                  <div className='cards__button-wrapper'>
                    <button className="button cards__button-load" onClick={loadMoreMovies}>Ещё</button>
                  </div>
                )}
              </>
          }
        </>
      )}
    </section>
  );
}