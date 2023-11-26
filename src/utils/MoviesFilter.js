import { SHORT_FILM_MIN } from "./Constants";

export function filterMovies(movies, query) {
	const moviesByQuery = movies.filter((movie) => {
		const movieRu = String(movie.nameRU).toLowerCase().trim();
		const movieEn = String(movie.nameEN).toLowerCase().trim();
		const userQuery = query.toLowerCase().trim();
		return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
	});
	return moviesByQuery;
}

export function filterByDuration(movies) {
	return movies.filter((movie) => movie.duration < SHORT_FILM_MIN);
}