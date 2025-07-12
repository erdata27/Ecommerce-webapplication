import React from 'react';
import { useSelector } from 'react-redux';             // To access Redux store
import { Navigate, Outlet } from 'react-router-dom';   // For conditional routing

// This component protects routes based on whether a user is logged in or not
// If publicPage is true, it means this is a route like login/signup
const PrivateRoute = ({ publicPage = false }) => {
    // Accessing the user state from Redux store
    const { user } = useSelector((state) => state.auth);

    // If it's a public page (like login/register) and user is already logged in,
    // redirect them to the homepage
    if (publicPage) {
        return user ? <Navigate to="/" /> : <Outlet />;
    }

    // If it's a protected route, allow access only if the user is logged in,
    // otherwise redirect them to the login page
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
