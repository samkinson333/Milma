/**
 * Centralized Color System for MILMA
 * This file serves as the single source of truth for branding colors.
 * These values are used to initialize the ThemeContext and can be 
 * updated dynamically via the Admin Panel.
 */

export const colors = {
    // Primary Brand Identity (Milma Red)
    primary: '#991b1b',
    primaryDark: '#7f1d1d',
    primaryDarker: '#8b0000',

    // Secondary / Accents (Milma Gold/Yellow)
    secondary: '#ffeb3b',
    gold: '#ffd700',
    goldLight: '#ffed4e',

    // Functional Colors
    success: '#166534',
    warning: '#dcb315',
    error: '#991b1b',
    info: '#0369a1',

    // UI Colors
    bg: '#ffffff',
    bgGray: '#f8f9fa',
    bgPink: '#fef5f5',
    textDark: '#1a1a1a',
    textPrimary: '#333333',
    textSecondary: '#555555',
    textLight: '#ffffff',
    border: '#dddddd',
    borderLight: '#f0f0f0'
};

export default colors;
