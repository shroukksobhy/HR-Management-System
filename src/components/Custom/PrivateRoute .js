import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';
// const PrivateRoute = () => {
//     const { isAuthenticated } = useAuth();

//     return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };
const PrivateRoute = ({ element: Element, ...rest }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
    //     return (
    //         <Route
    //             {...rest}
    //             element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    //         />

    //     );
};

export default PrivateRoute;
