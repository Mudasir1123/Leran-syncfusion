import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [primaryColor, setPrimaryColor] = useState('blue');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const savedColor = localStorage.getItem('primaryColor');
        if (savedTheme) setIsDarkMode(JSON.parse(savedTheme));
        if (savedColor) setPrimaryColor(savedColor);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isDarkMode));
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('primaryColor', primaryColor);
        document.documentElement.setAttribute('data-color', primaryColor);
    }, [primaryColor]);

    const colors = {
        dark: '#1a1a1a',
        light: '#ffffff',
        blue: '#2563eb',
        lightBlue: '#3b82f6',
        grey: '#6b7280',
        lightGrey: '#d1d5db',
    };

    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    const setColor = (color) => setPrimaryColor(color);

    return (
        <ThemeContext.Provider
            value={{ isDarkMode, toggleTheme, primaryColor, setColor, colors }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
