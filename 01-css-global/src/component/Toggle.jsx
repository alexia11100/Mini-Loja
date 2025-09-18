// 

import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../style/component/01-css-global/toggle.css";

export default function Toggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`toggle-button ${isDarkMode ? "dark" : ""}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {/* Toggle Circle */}
      <div className="toggle-circle" aria-hidden="true">
        <div className="icon-container">
          {isDarkMode ? (
            // Sun icon
            <svg className="icon sun" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          ) : (
            // Moon icon
            <svg className="icon moon" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          )}
        </div>
      </div>

      {/* Background track indicator */}
      <div className="background-track" aria-hidden="true">
        <div className="track-indicator" />
      </div>
    </button>
  );
}
