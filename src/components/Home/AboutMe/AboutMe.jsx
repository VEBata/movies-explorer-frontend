import "./AboutMe.css";
import { SectionTitle } from "../../Atoms/SectionTitle/SectionTitle";
import avatar from "../../../images/avatar.png";

export const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <SectionTitle title="Студент" />
        <div className="about-me__content">
          <h3 className="about-me__name">Виктор</h3>
          <p className="about-me__about">Фронтенд-разработчик, 26 лет</p>
          <p className="about-me__description">
            Я родился и живу в городе Москва.
          </p>
          <a
            className="about-me__link link"
            href="https://github.com/VEBata"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <img
            className="about-me__avatar"
            src={avatar}
            alt="Фотография студента"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
