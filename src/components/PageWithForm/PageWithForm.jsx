import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './PageWithForm.css';

export const PageWithForm = ({ title, name, onSubmit, children, question, link, linkTitle }) => {
	return (
		<section className='page-form'>
			<div className='page-form__container'>
				<Link
					to='/'
					className='link page-form__link'
				>
					<img
						src={logo}
						alt="Логотип"
					/>
				</Link>
				<h1 className='page-form__form-title'>{title}</h1>
				<div
					className="form page-form__form"
					name={name}
					noValidate
				>
					{children}
				</div>
				<div className="page-form__wrapper">
					<p className="page-form__text">{question}</p>
					<Link
						className="link page-form__form-link"
						to={link}
					>
						{linkTitle}
					</Link>
				</div>
			</div>
		</section>
	);
}