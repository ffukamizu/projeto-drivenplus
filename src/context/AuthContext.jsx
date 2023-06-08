import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const setAuthToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    return <AuthContext.Provider value={{ token, setAuthToken }}>{children}</AuthContext.Provider>;
};
