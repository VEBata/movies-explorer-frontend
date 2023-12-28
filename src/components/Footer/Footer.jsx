import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h4 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <div className="footer__content">
        <p className="footer__copyright">&copy; {year}</p>
        <nav>
          <ul className="footer__links">
            <li className="footer__item">
              <a
                href="https://praktikum.yandex.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://github.com/VEBata"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link link"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};