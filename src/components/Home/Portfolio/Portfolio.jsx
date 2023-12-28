import "./Portfolio.css";

export const Portfolio = () => {
  const links = [
    {
      link: 'https://github.com/VEBata/how-to-learn',
      text: 'Статичный сайт'
    },
    {
      link: 'https://vebata.github.io/russian-travel/',
      text: 'Адаптивный сайт'
    },
    {
      link: 'https://github.com/VEBata',
      text: 'Одностраничное приложение'
    },
  ]
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          {
            links.map((link, i) => (
              <li key={i} className="portfolio__item">
                <a
                  className="portfolio__link link"
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="portfolio__name">{link.text}</p>
                  &#x2197;
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
