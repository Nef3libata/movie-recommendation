import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        return <Navigate to={'/profile'} />
    }
    return children;
};