import './Promo.css'
import promo from '../../../images/promo.svg'

export const Promo = () => {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <img className='promo__logo' src={promo} />
    </section>
  )
}