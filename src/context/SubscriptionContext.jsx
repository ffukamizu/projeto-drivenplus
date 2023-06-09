import React, { createContext, useState, useEffect } from 'react';

export const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
    const [subscriptionData, setSubscriptionData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('subscriptionData');
        if (storedData) {
            setSubscriptionData(JSON.parse(storedData));
        }
    }, []);

    const saveSubscriptionData = (data) => {
        setSubscriptionData(data);
        localStorage.setItem('subscriptionData', JSON.stringify(data));
    };

    const clearSubscriptionData = () => {
        setSubscriptionData(null);
        localStorage.removeItem('subscriptionData');
    };

    return (
        <SubscriptionContext.Provider
            value={{
                subscriptionData,
                saveSubscriptionData,
                clearSubscriptionData,
            }}>
            {children}
        </SubscriptionContext.Provider>
    );
};
