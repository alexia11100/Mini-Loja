import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    transition: background-color ${props => props.theme.transitions.normal}, 
                color ${props => props.theme.transitions.normal};
    line-height: 1.5;
  }

  #root {
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 ${props => props.theme.spacing.lg};
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 0 ${props => props.theme.spacing.xl};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: ${props => props.gap || props.theme.spacing.md};
  
  ${props => props.cols && `
    grid-template-columns: repeat(${props.cols}, 1fr);
  `}

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) and (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(${props => Math.min(props.cols || 2, 2)}, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) and (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(${props => Math.min(props.cols || 3, 3)}, 1fr);
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => props.gap || '0'};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`;

export const Card = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.padding || props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.md};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    box-shadow: ${props => props.theme.shadows.lg};
    transform: ${props => props.hoverTransform || 'translateY(-2px)'};
  }
`;

export const Button = styled.button`
  background-color: ${props => props.variant === 'secondary' 
    ? props.theme.colors.surface 
    : props.theme.colors.primary
  };
  color: ${props => props.variant === 'secondary' 
    ? props.theme.colors.text 
    : 'white'
  };
  border: 1px solid ${props => props.variant === 'secondary' 
    ? props.theme.colors.border 
    : props.theme.colors.primary
  };
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.size === 'sm' 
    ? `${props.theme.spacing.sm} ${props.theme.spacing.md}` 
    : `${props.theme.spacing.md} ${props.theme.spacing.lg}`
  };
  font-size: ${props => props.size === 'sm' ? '0.875rem' : '1rem'};
  font-weight: 500;
  transition: all ${props => props.theme.transitions.fast};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};

  &:hover {
    background-color: ${props => props.variant === 'secondary' 
      ? props.theme.colors.surfaceHover 
      : props.theme.colors.primaryHover
    };
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;