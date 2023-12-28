import { MOVIES_API_URL } from './Constants';
import { makeRequest } from './MainApi';

const checkResponse = async (res) => {
  if (res.ok) {
    return await res.json();
  }
  throw new Error(`Код ошибки: ${res.status}`);
}

export const getMovies = async() => {
  const res = await fetch(MOVIES_API_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (res.ok) {
    try {
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error('Ошибка при обработке JSON: ' + error.message);
    }
  }
  throw new Error(`Код ошибки: ${res.status}`);
}