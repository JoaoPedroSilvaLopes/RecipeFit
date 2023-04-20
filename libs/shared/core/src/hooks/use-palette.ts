import { useContext } from 'react';
import { PaletteContext } from '../contexts/palette-context';

export const usePalette = () => useContext(PaletteContext);
