import "./AboutProject.css"
import { SectionTitle } from "../../Atoms/SectionTitle/SectionTitle";

export const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <SectionTitle title="О проекте" className='about-project__title' />
      <div className="about-project__descs">
        <div className="about-project__description">
          <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
					<p className="about-project__description-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
				<div className="about-project__desc">
					<h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
					<p className="about-project__description-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
				</div>
      </div>
			<div className="about-project__timeline">
				<p className="about-project__timeline-title about-project__timeline-title_backend">1 неделя</p>
				<p className="about-project__timeline-title about-project__timeline-title_frontend">4 недели</p>
        <p className="timeline__signature timeline__signature_backend">Back-end</p>
        <p className="timeline__signature timeline__signature_frontend">Front-end</p>
			</div>
    </section>
  )
}