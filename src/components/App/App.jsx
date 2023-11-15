import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Register from "../PageWithForm/Register/Register";
import Login from "../PageWithForm/Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import CurrentUserContext from "../contexts/CurrentUserContext";

const App = () => {
  const location = useLocation().pathname;
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({ id: 1, name: "Виктор" });

  const headerEndpoints =
    location === "/" ||
    location === "/movies" ||
    location === "/saved-movies" ||
    location === "/profile";
  const footerEndpoints =
    location === "/movies" || location === "/saved-movies" || location === "/";

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          {headerEndpoints && <Header loggedIn={loggedIn} />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/signup" element={<Register />} />
            <Route
              path="/signin"
              element={<Login setLoggedIn={setLoggedIn} />}
            />
            <Route
              path="/profile"
              element={<Profile setLoggedIn={setLoggedIn} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {footerEndpoints && <Footer isLoggedIn={loggedIn} />}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
