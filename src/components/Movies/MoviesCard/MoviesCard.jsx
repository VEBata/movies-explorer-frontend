import "./MoviesCard.css";
import { useState } from "react";

const MoviesCard = ({ link, alt, title, duration }) => {
  const [isLiked, setIsLiked] = useState(false);

  const cardLikeButtonClassName = `card__button-like ${
    isLiked && "card__button-like_active"
  }`;

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className="card">
      <img className="card__image" src={link} alt={alt} />
      <div className="card__container">
        <h2 className="card__title">{title}</h2>
        <button
          className={`button ${cardLikeButtonClassName}`}
          type="button"
          onClick={handleLike}
        />
      </div>
      <p className="card__duration">{duration}</p>
    </li>
  );
};

export default MoviesCard;
