import React, { createContext, useContext, useState, useEffect } from 'react';

import colorsConfig from '../styles/colors';

interface ThemeColors {
    primary: string;
    secondary: string;
    gold: string;
    bg: string;
    textDark: string;
}

interface ThemeContextType {
    colors: ThemeColors;
    updateColors: (newColors: Partial<ThemeColors>) => void;
    resetTheme: () => void;
}

const defaultColors: ThemeColors = {
    primary: colorsConfig.primary,
    secondary: colorsConfig.secondary,
    gold: colorsConfig.gold,
    bg: colorsConfig.bg,
    textDark: colorsConfig.textDark,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [colors, setColors] = useState<ThemeColors>(() => {
        const saved = localStorage.getItem('milma-theme-colors');
        return saved ? JSON.parse(saved) : defaultColors;
    });

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-gold', colors.gold);
        root.style.setProperty('--color-bg', colors.bg);
        root.style.setProperty('--color-text-dark', colors.textDark);

        // Update derivative colors (simplified)
        // In a real scenario, we might want a color utility to generate these
        root.style.setProperty('--color-primary-dark', colors.primary); // Placeholder
        root.style.setProperty('--color-primary-darker', colors.primary); // Placeholder

        localStorage.setItem('milma-theme-colors', JSON.stringify(colors));
    }, [colors]);

    const updateColors = (newColors: Partial<ThemeColors>) => {
        setColors(prev => ({ ...prev, ...newColors }));
    };

    const resetTheme = () => {
        setColors(defaultColors);
    };

    return (
        <ThemeContext.Provider value={{ colors, updateColors, resetTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
