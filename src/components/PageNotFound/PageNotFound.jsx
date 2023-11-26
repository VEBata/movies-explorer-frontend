import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<main className="content">
			<div className="not-found">
					<h1 className="not-found__title">404</h1>
					<p className="not-found__subtitle">Страница не найдена</p>
					<button className="not-found__button button" onClick={() => navigate(-1)}>
						Назад
					</button>
				</div>
		</main>
	);
}

export default PageNotFound;