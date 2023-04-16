import React, { useState, createContext, ReactNode } from 'react';
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components/native';
import { themeDark, themeLight } from '@nx-workspace//shared/styles';

type AvailableModes = 'light' | 'dark';

type ThemeContextProps = {
  defaultTheme: 'light' | 'dark';
  children: ReactNode;
};

type ThemeContextType = {
  mode: AvailableModes;
};

export const ThemeContext: React.Context<ThemeContextType> = createContext(
  {} as ThemeContextType
);

export const ThemeProvider: React.FC<ThemeContextProps> = ({
  defaultTheme,
  children,
}) => {
  const [mode, setMode] = useState<AvailableModes>(defaultTheme);

  const handleDefaultTheme = (mode: AvailableModes) => {
    return getTheme(defaultTheme);
  };

  const getTheme = (mode: AvailableModes): DefaultTheme => {
    switch (mode) {
      case 'dark':
        return themeDark;
      default:
        return themeLight;
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
      }}
    >
      <StyledThemeProvider theme={handleDefaultTheme(mode)}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
