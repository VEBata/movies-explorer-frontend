import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<main className='page-not-found'>
			<div className='page-not-found__main'>
                <h1 className='page-not-found__title'>404</h1>
                <p className='page-not-found__subtitle'>Страница не найдена</p>
                <button className="button page-not-found__button" onClick={() => navigate(-1)}>
                    Назад
                </button>
            </div>
		</main>
	);
}