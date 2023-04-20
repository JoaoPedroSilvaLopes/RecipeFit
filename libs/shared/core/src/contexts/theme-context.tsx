import React, { useState, createContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { getTheme } from '../utils';

type AvailableModes = 'light' | 'dark';

type ThemeContextProps = {
  defaultMode: 'light';
  children: ReactNode;
};

type ThemeContextType = {
  mode: AvailableModes;
  toggleTheme: () => void;
};

export const ThemeContext: React.Context<ThemeContextType> = createContext(
  {} as ThemeContextType
);

export const ThemeProvider: React.FC<ThemeContextProps> = ({
  defaultMode,
  children,
}) => {
  const [mode, setMode] = useState<AvailableModes>(defaultMode);

  const toggleTheme = (): void => {
    handleMode(mode === defaultMode ? 'dark' : defaultMode);
  };

  const handleMode = (mode: AvailableModes) => {
    setMode(mode);
  };

  const handleDefaultTheme = (mode: AvailableModes) => {
    return getTheme(mode);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={handleDefaultTheme(mode)}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
