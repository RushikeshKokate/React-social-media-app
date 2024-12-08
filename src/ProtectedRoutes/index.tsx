import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ProtectedRoutesProps {
    
}
const ProtectedRoutes: React.FC<ProtectedRoutesProps> = () => {
    const isAuth: boolean = false;
    const location = useLocation();
    return isAuth ? <Outlet /> : <Navigate to="/Main" state={{ from : location}}/>  
}

export default ProtectedRoutes;