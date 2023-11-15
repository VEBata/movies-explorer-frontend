import './PageWithForm.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const PageWithForm = ({ title, name, onSubmit, children, question, link, linkTitle }) => {
	return (
		<section className="page-form">
			<div className="page-form__container">
				<Link
					to='/'
					className='page-form__logo link'
				>
					<img
						src={logo}
						alt="Логотип"
					/>
				</Link>
				<h1 className="page-form__title">{title}</h1>
				<form
					className="page-form__form form"
					name={name}
					onSubmit={onSubmit}
					noValidate
				>
					{children}
				</form>
				<div className="page-form__wrapper">
					<p className="page-form__text">{question}</p>
					<Link
						className="page-form__link link"
						to={link}
					>
						{linkTitle}
					</Link>
				</div>
			</div>
		</section>
	);
}

export default PageWithForm;