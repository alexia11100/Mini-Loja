import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Toggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-8 rounded-full transition-colors duration-300 
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 
                     dark:focus:ring-offset-gray-800"
            style={{
                backgroundColor: isDarkMode ? '#4299e1' : '#cbd5e0'
            }}
            aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
            {/* Toggle Circle */}
            <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full 
                          shadow-md transform transition-transform duration-300 
                          flex items-center justify-center
                          ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
            >
                {/* Icon */}
                <div className="w-4 h-4 flex items-center justify-center">
                    {isDarkMode ? (
                        // Sun icon
                        <svg 
                            className="w-3 h-3 text-yellow-500" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                    ) : (
                        // Moon icon
                        <svg 
                            className="w-3 h-3 text-gray-600" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                        </svg>
                    )}
                </div>
            </div>

            {/* Background track indicator */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
                <div 
                    className={`absolute inset-y-1 w-6 rounded-full transition-all duration-300
                              ${isDarkMode 
                                ? 'right-1 bg-blue-400/20' 
                                : 'left-1 bg-gray-400/20'
                              }`}
                />
            </div>
        </button>
    );
}