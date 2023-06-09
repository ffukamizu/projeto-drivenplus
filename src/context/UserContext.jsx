import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    useEffect(() => {
        if (userName) {
            localStorage.setItem('userName', userName);
        } else {
            localStorage.removeItem('userName');
        }
    }, [userName]);

    const setUserNameValue = (newUserName) => {
        setUserName(newUserName);
    };

    return (
        <UserContext.Provider
            value={{
                userName,
                setUserName: setUserNameValue,
            }}>
            {children}
        </UserContext.Provider>
    );
};
