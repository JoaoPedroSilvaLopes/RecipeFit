import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    blueThemeColors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundContent: string;
      suportColor: string;
      textPrimary: string;

      lightColor: string;
      darkColor: string;

      sucessBackground: string;
      sucess: string;
      danger: string;
    };
    orangeThemeColors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundContent: string;
      textPrimary: string;

      lightColor: string;
      darkColor: string;

      sucessBackground: string;
      sucess: string;
      danger: string;
    };
    greenThemeColors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundContent: string;
      textPrimary: string;

      lightColor: string;
      darkColor: string;

      sucessBackground: string;
      sucess: string;
      danger: string;
    };
    colorsPalettes: {
      bluePalettePrimary: string;
      bluePaletteSecondary: string;

      orangePalettePrimary: string;
      orangePaletteSecondary: string;

      greenPalettePrimary: string;
      greenPaletteSecondary: string;

      darkPaletterPrimary: string;
      darkPaletterSecondary: string;

      lightPaletterPrimary: string;
      lightPaletterSecondary: string;
    };
    fontDefault: {
      family: string;
    };
    fontAlimentacao: {
      family: string;
    };
  }
}
