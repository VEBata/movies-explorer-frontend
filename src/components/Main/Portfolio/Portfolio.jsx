import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h4 className="portfolio__title">Портфолио</h4>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              className="portfolio__link link"
              href="https://github.com/VEBata/how-to-learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="portfolio__name">Статичный сайт</p>
              &#x2197;
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="portfolio__link link"
              href="https://github.com/VEBata/russian-travel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="portfolio__name">Адаптивный сайт</p>
              &#x2197;
            </a>
          </li>
          <li className="portfolio__item">
            <a
              className="portfolio__link link"
              href="https://im-aldm.nomoredomainsrocks.ru/sign-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="portfolio__name">Одностраничное приложение</p>
              &#x2197;
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
