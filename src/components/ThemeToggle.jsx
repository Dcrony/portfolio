import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark theme">
        <span className="theme-toggle__icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
        <span className="theme-toggle__label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
);

export default ThemeToggle;
