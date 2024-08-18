import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [user, setUser] = useState(null);

    // const login = () => setIsAuthenticated(false);
    const login = (callback) => {
        console.log(callback);
        setIsAuthenticated(true);
        setUser(callback);
        // userString ? setUser(userString) : setUser(null)
        // if (callback) callback();
    };

    const logout = () => setIsAuthenticated(false);
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// export const useAuth = () => useContext(AuthContext);
