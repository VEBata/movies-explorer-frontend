import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = (token) => {
	return (
		token ? <Outlet /> : <Navigate to='/signin' />
	)
};