import { MOVIES_API_URL } from './Constants';

const checkResponse = (res) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`checkResponse - ошибка: ${res.status}`);
}

export const getMovies = () => {
	return fetch(`${MOVIES_API_URL}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => checkResponse(res))
}