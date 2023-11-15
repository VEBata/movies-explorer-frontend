import './AboutProject.css';
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutProject = () => {
	return (
		<section className="about-project" id="about-project">
			<SectionTitle title="О проекте" />
			<div className="about-project__descriptions">
				<div className="about-project__description">
					<h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
					<p className="about-project__description-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
				</div>
				<div className="about-project__description">
					<h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
					<p className="about-project__description-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
				</div>
			</div>
			<div className="timeline">
				<p className="timeline__title timeline__title_backend">1 неделя</p>
				<p className="timeline__title timeline__title_frontend">4 недели</p>
				<p className="timeline__signature timeline__signature_backend">Back-end</p>
				<p className="timeline__signature timeline__signature_frontend">Front-end</p>
			</div>
		</section>
	)
}

export default AboutProject