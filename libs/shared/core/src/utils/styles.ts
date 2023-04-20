import { Palette, Theme } from '@nx-workspace//shared/domain-types';
import { ColorPalette } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';
import {
  bluePalette,
  greenPalette,
  orangePalette,
  themeDark,
  themeLight,
} from '@nx-workspace//shared/styles';

export const getTheme = (mode: Theme): DefaultTheme => {
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

export const getThemeColors = (theme: Theme): string[] => {
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
