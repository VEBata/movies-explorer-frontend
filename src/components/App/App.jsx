import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Register from '../PageWithForm/Register/Register';
import Login from '../PageWithForm/Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from "../PageNotFound/PageNotFound";
import CurrentUserContext from '../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { PROFILE_UPDATE_ERROR, PROFILE_UPDATE_COMPLETED } from '../../utils/Constants';


const App = () => {
	const location = useLocation().pathname;
	const navigate = useNavigate();

	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [isServerError, setIsServerError] = useState('');
	const [submitMessage, setSubmitMessage] = useState('');
	const [isDisabledInput, setIsDisabledInput] = useState(false);
	const [savedMovies, setSavedMovies] = useState([]);

	const headerEndpoints = (
		location === "/" ||
		location === "/movies" ||
		location === "/saved-movies" ||
		location === "/profile"
	);
	const footerEndpoints = (
		location === '/movies' ||
		location === '/saved-movies' ||
		location === '/'
	);

	useEffect(() => {
		loggedIn && Promise.all([mainApi.getDataUser(), mainApi.getDataMovies()])
			.then(([data, movies]) => {
				setCurrentUser(data)
				setSavedMovies(movies.reverse());
			})
			.catch((err) => {
				console.error(`Promise.all - ошибка: ${err}`);
			})
			.finally(() => {
			})
	}, [loggedIn])

	const handleTokenCheck = () => {
		const token = localStorage.getItem('token');
		if (!token) {
			return;
		}
		mainApi
			.getContent(token)
			.then((data) => {
				if (data) {
					setCurrentUser(data);
					setLoggedIn(true);
					navigate(location);
				}
			})
			.catch((err) => {
				console.error(`handleTokenCheck - ошибка: ${err}`)
				onExit();
			});
	};

	useEffect(() => {
		handleTokenCheck();
	}, [])

	const onExit = () => {
		localStorage.clear();
		setLoggedIn(false);
		navigate('/');
		setCurrentUser({});
	};

	const onRegister = (name, email, password) => {
		setIsDisabledInput(true)
		mainApi
			.registration(name, email, password)
			.then((data) => {
				if (data) {
					onLogin(email, password)
				}
			})
			.catch((err) => {
				setIsServerError(err)
				console.error(`onRegister - ошибка: ${err}`);
			})
			.finally(() => {
				setIsDisabledInput(false)
			});
	}

	const onLogin = (email, password) => {
		setIsDisabledInput(true)
		mainApi
			.authorization(email, password)
			.then((data) => {
				localStorage.setItem('token', data.token);
				setLoggedIn(true);
				navigate('/movies');
			})
			.catch((err) => {
				setIsServerError(err)
				console.error(`onLogin - ошибка: ${err}`)
			})
			.finally(() => {
				setIsDisabledInput(false)
			});
	}

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
			.then((movieCard) => {
				setSavedMovies([movieCard, ...savedMovies])
			})
			.catch((err) => {
				console.error(`handleSaveMovie - ошибка: ${err}`);
			})
	}

	const handleDeleteMovie = (movie) => {
		if (!movie._id) {
			const movieDelete = savedMovies.find((mov) => {
				return mov.movieId === movie.id;
			});
			mainApi
				.deleteMovie(movieDelete._id)
				.then(() => {
					setSavedMovies(
						savedMovies.filter((mov) => {
							return mov._id !== movieDelete._id;
						})
					);
				})
				.catch((err) => {
					console.log(err)
				})
		} else {
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
		}
	};

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">
				<div className="page__container">
					{headerEndpoints &&
						<Header
							loggedIn={loggedIn}
						/>}
					<Routes>
						<Route
							path="/"
							element={<Main />}
						/>
						<Route
							path="/movies"
							element={
								<ProtectedRoute
									element={Movies}
									loggedIn={loggedIn}
									savedMovies={savedMovies}
									onSaveMovie={handleSaveMovie}
									onDeleteMovie={handleDeleteMovie}
								/>}
						/>
						<Route
							path="/saved-movies"
							element={
								<ProtectedRoute
									element={SavedMovies}
									loggedIn={loggedIn}
									savedMovies={savedMovies}
									onDeleteMovie={handleDeleteMovie}
								/>}
						/>
						<Route path="/signup" element={loggedIn ?
							<Navigate to="/movies" replace /> :
							<Register
								onRegister={onRegister}
								isServerError={isServerError}
								isDisabledInput={isDisabledInput}
							/>
						} />

						<Route path="/signin" element={loggedIn ?
							<Navigate to="/movies" replace /> :
							<Login
								onLogin={onLogin}
								isServerError={isServerError}
								isDisabledInput={isDisabledInput}
							/>
						} />
						<Route
							path="/profile"
							element={
								<ProtectedRoute
									element={Profile}
									loggedIn={loggedIn}
									onExit={onExit}
									setSubmitMessage={setSubmitMessage}
									submitMessage={submitMessage}
									handleUpdateUser={handleUpdateUser}
									isDisabledInput={isDisabledInput}
								/>}
						/>
						<Route
							path="*"
							element={<PageNotFound />}
						/>
					</Routes>
					{footerEndpoints &&
						<Footer
							isLoggedIn={loggedIn}
						/>}
				</div>
			</div>
		</CurrentUserContext.Provider>
	)
}

export default App;
