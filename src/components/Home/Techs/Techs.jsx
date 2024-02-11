import { SectionTitle } from "../../Atoms/SectionTitle/SectionTitle";
import "./Techs.css";

export const Techs = () => {
  const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']
  return (
    <section className="techs" id="techs">
      <div className="techs__content">
				<SectionTitle className="techs__title" title="Технологии" />
				<h2 className="techs__subtitle">7 технологий</h2>
				<p className="techs__subsubtitle">
					На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
				</p>
				<ul className="techs__list">
          {
            techs.map((tech, i) => (
              <li className="techs__item" key={i}>{tech}</li>
            ))
          }
				</ul>
			</div>
    </section>
	);
}