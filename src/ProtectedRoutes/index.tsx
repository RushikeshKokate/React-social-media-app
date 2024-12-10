import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const ProtectedRoutes: React.FC = () => {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    const location = useLocation();

    return user ? <Outlet /> : <Navigate to="/Main" state={{ from: location }} />;
};

export default ProtectedRoutes;
