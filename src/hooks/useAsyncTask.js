import { useState } from 'react';

export const useAsyncTask = (fn) => {
	const [running, setRunning] = useState(false);
	const task = (...args) => {
		setRunning(true);
		return fn(...args).finally(() => setRunning(false));
	};

	return [task, running];
};
