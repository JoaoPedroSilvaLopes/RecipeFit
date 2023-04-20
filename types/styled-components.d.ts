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
      danger: string;

      sucessMessageBackground: string;
      sucessMessage: string;
      dangerMessageBackground: string;
      dangerMessage: string;
    };
    colorPalette: colorPalette;
    fontDefault: {
      family: string;
    };
    fontAlimentacao: {
      family: string;
    };
  }
}
