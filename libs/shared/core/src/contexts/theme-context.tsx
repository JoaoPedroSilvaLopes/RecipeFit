import React, { useState, createContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider,  } from 'styled-components/native';
import { StylesUtils } from '../utils';

type AvailableModes = 'light' | 'dark';
type AvailablePalette = 'blue' | 'orange' | 'green';

type ThemeContextProps = {
  defaultMode: 'light';
  defaultPalette: 'blue';
  children: ReactNode;
};

type ThemeContextType = {
  mode: AvailableModes;
  toggleTheme: () => void;

  palette: AvailablePalette;
  togglePalette: (palette: AvailablePalette) => void;
};

export const ThemeContext: React.Context<ThemeContextType> = createContext(
  {} as ThemeContextType
);

export const ThemeProvider: React.FC<ThemeContextProps> = ({
  defaultMode,
  defaultPalette,
  children,
}) => {
  const [mode, setMode] = useState<AvailableModes>(defaultMode);
  const [palette, setPalette] = useState<AvailablePalette>(defaultPalette);

  const toggleTheme = (): void => {
    handleMode(mode === defaultMode ? 'dark' : defaultMode);
  };

  const handleMode = (mode: AvailableModes) => {
    setMode(mode);
  };

  const handleDefaultTheme = (mode: AvailableModes) => {
    return StylesUtils.getTheme(mode, palette);
  };

  const togglePalette = (palette: AvailablePalette): void => {
    handlePalette(palette)
  }

  const handlePalette = (palette: AvailablePalette) => {
    setPalette(palette);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        palette,
        toggleTheme,
        togglePalette
      }}
    >
      <StyledThemeProvider theme={handleDefaultTheme(mode)}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
