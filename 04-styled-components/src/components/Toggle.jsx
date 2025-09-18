import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const ToggleButton = styled.button`
  position: relative;
  width: 56px;
  height: 32px;
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => props.$isDarkMode ? props.theme.colors.primary : '#cbd5e0'};
  transition: all ${props => props.theme.transitions.normal};
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const ToggleCircle = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.full};
  box-shadow: ${props => props.theme.shadows.md};
  transform: translateX(${props => props.$isDarkMode ? '24px' : '0'});
  transition: transform ${props => props.theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SunIcon = styled.svg`
  width: 12px;
  height: 12px;
  color: #f59e0b;
  fill: currentColor;
`;

const MoonIcon = styled.svg`
  width: 12px;
  height: 12px;
  color: #6b7280;
  fill: currentColor;
`;

const BackgroundTrack = styled.div`
  position: absolute;
  inset: 0;
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
`;

const TrackIndicator = styled.div`
  position: absolute;
  top: 4px;
  bottom: 4px;
  width: 24px;
  border-radius: ${props => props.theme.borderRadius.full};
  transition: all ${props => props.theme.transitions.normal};
  ${props => props.$isDarkMode ? `
    right: 4px;
    background-color: rgba(59, 130, 246, 0.2);
  ` : `
    left: 4px;
    background-color: rgba(156, 163, 175, 0.2);
  `}
`;

export default function Toggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <ToggleButton
            onClick={toggleTheme}
            $isDarkMode={isDarkMode}
            aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
            {/* Toggle Circle */}
            <ToggleCircle $isDarkMode={isDarkMode}>
                {/* Icon */}
                <IconContainer>
                    {isDarkMode ? (
                        // Sun icon
                        <SunIcon viewBox="0 0 24 24">
                            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </SunIcon>
                    ) : (
                        // Moon icon
                        <MoonIcon viewBox="0 0 24 24">
                            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                        </MoonIcon>
                    )}
                </IconContainer>
            </ToggleCircle>

            {/* Background track indicator */}
            <BackgroundTrack>
                <TrackIndicator $isDarkMode={isDarkMode} />
            </BackgroundTrack>
        </ToggleButton>
    );
}