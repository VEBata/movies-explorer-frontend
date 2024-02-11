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
import { MoviesCard } from './MoviesCard';

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