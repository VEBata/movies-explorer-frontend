import './Promo.css';
import promo from '../../../images/promo.svg';

const Promo = () => {
	return (
		<section className='promo'>
			<h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
			<img className="promo__logo" src={promo} alt="Геометрические фигуры" />
		</section>
	)
}

export default Promo;