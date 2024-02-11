import { NavTabWrapper, NavTabItem, NavTabLink } from "./NavTab.css";

export const NavTab = () => {
  const links = [
    {
      link: '#about-project',
      text: 'О проекте'
    },
    {
      link: '#techs',
      text: 'Технологии'
    },
    {
      link: '#about-me',
      text: 'Студент'
    }
  ]

  const scrollTo = (link) => {
    const targetElement = document.querySelector(link);
    let scrollDiv = targetElement.offsetTop;
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
      window.document.body.classList.remove('ovhidden')
    }
  }

  return (
    <ul className="navigation">
      {
        links.map((link, i) => (
          <li className="navigation__item" key={i}>
            <span onClick={() => scrollTo(link.link)} className="navigation__link link">
              {link.text}
            </span>
          </li>
        ))
      }
    </ul>
	)
}