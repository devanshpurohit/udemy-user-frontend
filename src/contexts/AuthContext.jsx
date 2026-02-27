import React, { createContext, useContext, useState, useEffect } from 'react';
import { isLoggedIn, getStoredUser, logout } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check authentication status on app load
        const checkAuth = () => {
            const loggedIn = isLoggedIn();
            const userData = getStoredUser();
            
            console.log('🔍 AuthContext - Checking auth:', { loggedIn, userData });
            
            setIsAuthenticated(loggedIn);
            setUser(userData);
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
    };

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        setUser(null);
    };

    const value = {
        isAuthenticated,
        user,
        loading,
        login,
        logout: handleLogout,
        setUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
