import { BASE_URL, MOVIES_API_IMG_URL } from './Constants';

export const makeRequest = async (url, options = {}) => {
  const response = await fetch(url, options);
  return await checkResponse(response);
}

const checkResponse = (res) => {
	if (res.ok) {
    const data = res.json()
		return data;
	}
	return Promise.reject(`Код ошибки: ${res.status}`);
}

export const registration = async (name, email, password) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password })
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }

  return Promise.reject(`Код ошибки: ${res.status}`);
};

export const authorization = async (email, password) => {
	const res = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  });
  return checkResponse(res);
};

export const getContent = async(token) => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
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

const getToken = () => `Bearer ${localStorage.getItem('token')}`;

export const getDataUser = async() => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
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

export const setDataUser = async({ name, email }) => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
    body: JSON.stringify({ name, email }),
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

export const getDataMovies = async() => {
  const res = await fetch(`${BASE_URL}/movies`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
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

export const addMovie = async(data) => {
  const {country, description, director, duration, id, nameEN, nameRU, trailerLink, year} = data
  const body = {
    country, description, director, duration, nameEN, nameRU, trailerLink, year,
    image: `${MOVIES_API_IMG_URL}${data.image.url}`,
    thumbnail: `${MOVIES_API_IMG_URL}${data.image.formats.thumbnail.url}`,
    movieId: id,
  };
  const res = await fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
    body: JSON.stringify(body),
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

export const deleteMovie = async(id) => {
  const res = await fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
    body: JSON.stringify({ id }),
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