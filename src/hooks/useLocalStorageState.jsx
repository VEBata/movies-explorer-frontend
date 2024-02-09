import { useEffect, useState } from 'react';

export const useLocalStorageState = (defaultValue, key) => {
  const storedValue = JSON.parse(localStorage.getItem(key));

  const [value, setValue] = useState(storedValue ?? defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
