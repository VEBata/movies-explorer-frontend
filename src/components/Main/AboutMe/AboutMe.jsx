import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import avatar from "../../../images/avatar.jpg";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <SectionTitle title="Студент" />
        <article className="about-me__content">
          <h3 className="about-me__name">Виктор</h3>
          <p className="about-me__about">Фронтенд-разработчик, 25 лет</p>
          <p className="about-me__description">
            Я живу в городе Москве.
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
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
