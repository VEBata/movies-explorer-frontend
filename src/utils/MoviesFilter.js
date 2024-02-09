import { SHORT_FILM_MIN } from "./Constants";

export function filterMovies(movies, query, isShort = false) {
  query = query.toLowerCase().trim();

  if(!query) return movies

  return movies.filter(movie => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const isQueryMatch = movieRu.includes(query) || movieEn.includes(query);
    const isDurationMatch = isShort ? movie.duration < SHORT_FILM_MIN : true;

    return isQueryMatch && isDurationMatch;
  });
}

export function filterByDuration(movies) {
	return movies.filter((movie) => movie.duration < SHORT_FILM_MIN);
}