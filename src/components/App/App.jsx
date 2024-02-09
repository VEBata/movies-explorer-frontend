import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate, useNavigate, redirect } from "react-router-dom";
import { Home } from "../Home/Home";
import { Movies } from "../Movies/Movies";
import { PageNotFound } from '../PageNotFound/PageNotFound'
import { Login } from '../PageWithForm/Login/Login'
import { Register } from '../PageWithForm/Register/Register'
import { Profile } from '../Profile/Profile'
import { SavedMovies } from '../Movies/SavedMovies/SavedMovies'
import { Header } from "../Atoms/Header/Header";
import { ProtectedRoute } from '../ProtectedRoute'
import { Footer } from '../Footer/Footer'
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi';
import * as movieApi from '../../utils/MoviesApi';
import { PROFILE_UPDATE_ERROR, PROFILE_UPDATE_COMPLETED } from '../../utils/Constants';
import './App.css'

function App() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isServerError, setIsServerError] = useState('');
  const [isDisabledInput, setIsDisabledInput] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);

  const [token, setToken] = useState('')
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (token && localStorage.getItem('token')) {
      setIsMoviesLoading(true)
      Promise.all([mainApi.getDataUser(), movieApi.getMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setMovies(moviesData.reverse());
          setIsMoviesLoading(false)
        })
        .catch(err => console.error(`Error: ${err}`));
    }
  }, [token]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.getContent(token)
        .then(data => {
          setCurrentUser(data);
          setLoggedIn(true);
        })
        .catch(err => {
          console.error(`Error: ${err}`);
          logout();
        });
      setIsMoviesLoading(true)
      movieApi.getMovies()
        .then((data) => {
          setMovies(data)
          setIsMoviesLoading(false)
        })
      mainApi.getDataMovies()
        .then(data => {
          setSavedMovies(data)
        })
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/');
    setCurrentUser({});
  };

  const handleRegistration = async (name, email, password, data) => {
    setIsDisabledInput(true);

    await data
      .then(async (data) => {
        setTimeout(async () => {
          if (data) {
            await handleLogin(mainApi.authorization(email, password));
          }
        }, 1000)

      })
      .catch((err) => {
        setIsServerError(err.message || 'Ошибка регистрации');
        console.error(`Ошибка регистрации: ${err}`);
      })
      .finally(() => {
        setIsDisabledInput(false);
      });
  };

  const handleLogin = async (autorizationTask) => {
    setIsDisabledInput(false);
    autorizationTask
      .then((data) => {
        if (data && data.token) {
          localStorage.setItem('token', data.token);
          setToken(data.token)
          setLoggedIn(true);
          navigate('/movies');
        } else {
          throw new Error('Ошибка авторизации');
        }
      })
      .catch((err) => {
        setIsServerError(err.message || 'Ошибка авторизации');
        console.error(`Ошибка авторизации: ${err}`);
      })
      .finally(() => {
        setIsDisabledInput(false);
      });
  };

  const handleUpdateUser = ({ name, email }) => {
    setIsDisabledInput(true)
    mainApi
      .setDataUser({ name, email })
      .then(() => {
        setCurrentUser({ name, email });
        setSubmitMessage(PROFILE_UPDATE_COMPLETED)
      })
      .catch((err) => {
        setSubmitMessage(PROFILE_UPDATE_ERROR)
        console.error(`handleUpdateUser - ошибка: ${err}`)
      })
      .finally(() => {
        setIsDisabledInput(false)
      })
  }

  const handleSaveMovie = (movieCard) => {
    mainApi
      .addMovie(movieCard)
      .then((newMovie) => {
        setSavedMovies(prevMovies => [...prevMovies, newMovie]);
      })
      .catch((err) => {
        console.error(`handleSaveMovie - ошибка: ${err}`);
      })
  }

  const handleDeleteMovie = (movie) => {
    if (!movie._id) return

    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((mov) => {
            return mov._id !== movie._id;
          })
        );
      })
      .catch((err) => {
        console.log(err)
      })

  };

  const showHeader = ['/', '/movies', '/saved-movies', '/profile'].includes(location);
  const footerEndpoints = ['/', '/movies', '/saved-movies'].includes(location);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          {showHeader && <Header />}
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route path="/signin" element={<Login onLogin={handleLogin} isServerError={isServerError} isDisabledInput={isDisabledInput} />} />
            <Route path="/signup" element={<Register onRegister={handleRegistration} isServerError={isServerError} isDisabledInput={isDisabledInput} />} />
            <Route path="*" element={<PageNotFound />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/movies" element={<Movies loggedIn={loggedIn} movies={movies} savedMovies={savedMovies} onSaveMovie={handleSaveMovie} onDeleteMovie={handleDeleteMovie} isLoading={isMoviesLoading} />} />
              <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} savedMovies={savedMovies} onDeleteMovie={handleDeleteMovie} />} />
              <Route path="/profile" element={<Profile loggedIn={loggedIn} onExit={logout}
                setSubmitMessage={setSubmitMessage}
                submitMessage={submitMessage}
                handleUpdateUser={handleUpdateUser}
                isDisabledInput={isDisabledInput} />} />
            </Route>
          </Routes>
          {footerEndpoints &&
            <Footer
              isLoggedIn={loggedIn}
            />
          }
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;