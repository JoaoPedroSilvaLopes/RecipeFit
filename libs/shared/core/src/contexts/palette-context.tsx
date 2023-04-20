import React, { useState, createContext, ReactNode, useEffect } from 'react';
import { ColorPalette } from 'styled-components';
import { getPalette } from '../utils';

type AvailablePalette = 'blue' | 'orange' | 'green';

type PaletteContextProps = {
  defaultPalette: 'blue';
  children: ReactNode;
};

type PaletteContextType = {
  palette: AvailablePalette;
  colorPalette: ColorPalette;
  togglePalette: () => void;
};

export const PaletteContext: React.Context<PaletteContextType> = createContext(
  {} as PaletteContextType
);

export const PaletteProvider: React.FC<PaletteContextProps> = ({
  defaultPalette,
  children,
}) => {
  const [palette, setPalette] = useState<AvailablePalette>(defaultPalette);
  const [colorPalette, setColorPalette] = useState<ColorPalette>(getPalette(defaultPalette));

  const togglePalette = (): void => {
    handlePalette(palette === defaultPalette ? 'green' : defaultPalette)
  }

  const handlePalette = (palette: AvailablePalette) => {
    setPalette(palette);
  };

  useEffect(() => {
    setColorPalette(getPalette(palette))
  }, [palette])

  return (
    <PaletteContext.Provider
      value={{
        palette,
        colorPalette,
        togglePalette,
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
};
