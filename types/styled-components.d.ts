import 'styled-components';

declare module 'styled-components' {
  export interface ColorPalette {
    primary: string;
    secondary: string;
  }

  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      backgroundContent: string;
      suportColor: string;
      textColor: string;

      sucessBackground: string;
      sucess: string;
      dangerBackground: string;
      danger: string;
    };
    colorPalette: {
      primary: string;
      secondary: string;
    };
    fontDefault: {
      family: string;
    };
    fontAlimentacao: {
      family: string;
    };
  }
}