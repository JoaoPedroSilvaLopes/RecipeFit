import { ColorMode, ColorPalette } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';
import {
  bluePalette,
  greenPalette,
  orangePalette,
  themeDark,
  themeLight,
} from '@nx-workspace//shared/styles';
import { Mode, Palette } from '../types';

export const getTheme = (mode: Mode, palette: Palette): DefaultTheme => {
  return { colorMode: getMode(mode), colorPalette: getPalette(palette) };
};

export const getMode = (mode: Mode): ColorMode => {
  switch (mode) {
    case 'dark':
      return themeDark;
    default:
      return themeLight;
  }
};

export const getPalette = (palette: Palette): ColorPalette => {
  switch (palette) {
    case 'blue':
      return bluePalette;
    case 'orange':
      return orangePalette;
    default:
      return greenPalette;
  }
};

export const getPaletteColors = (palette: Palette): string[] => {
  switch (palette) {
    case 'blue':
      return [bluePalette.primary, bluePalette.secondary];
    case 'orange':
      return [orangePalette.primary, orangePalette.secondary];
    default:
      return [greenPalette.primary, greenPalette.secondary];
  }
};

export const getModeColors = (theme: Mode): string[] => {
  switch (theme) {
    case 'dark':
      return [themeDark.colors.backgroundContent, themeDark.colors.background];
    default:
      return [
        themeLight.colors.backgroundContent,
        themeLight.colors.background,
      ];
  }
};
