import { BASE_URL, MOVIES_API_IMG_URL } from './Constants';

const checkResponse = (res) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Код ошибки: ${res.status}`);
}

export const registration = (name, email, password) => {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email, password })
	})
		.then((res) => checkResponse(res));
}

export const authorization = (email, password) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password })
	})
		.then((res) => checkResponse(res))
};

export const getContent = (token) => {
	return fetch(`${BASE_URL}/users/me`, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
		.then((res) => checkResponse(res))
}

export const getDataUser = () => {
	return fetch(`${BASE_URL}/users/me`, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token')}`,
		},
	}).then((res) => checkResponse(res))
}

export const setDataUser = ({ name, email }) => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token')}`,
		},
		body: JSON.stringify({
			name: name,
			email: email,
		}),
	}).then((res) => checkResponse(res))
}

export const getDataMovies = () => {
	return fetch(`${BASE_URL}/movies`, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token')}`,
		},
	}).then((res) => checkResponse(res))
}

export const addMovie = (data) => {
	return fetch(`${BASE_URL}/movies`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token')}`,
		},
		body: JSON.stringify({
			country: data.country,
			director: data.director,
			duration: data.duration,
			year: data.year,
			description: data.description,
			image: `${MOVIES_API_IMG_URL}${data.image.url}`,
			trailerLink: data.trailerLink,
			thumbnail: `${MOVIES_API_IMG_URL}${data.image.formats.thumbnail.url}`,
			movieId: data.id,
			nameRU: data.nameRU,
			nameEN: data.nameEN,
		}),
	}).then((res) => checkResponse(res))
}

export const deleteMovie = (movieId) => {
	return fetch(`${BASE_URL}/movies/${movieId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token')}`,
		},
		body: JSON.stringify({ movieId }),
	}).then((res) => checkResponse(res))
}