import { DefaultTheme } from 'styled-components';
import { bluePalette, greenPalette, orangePalette } from './palette';
import variables from './common';

export const themeLight: DefaultTheme = Object.assign({}, variables, {
  title: 'light',
  colors: {
    background: '#ffffff',
    backgroundContent: '#EDEDED',
    suportColor: '#ffffff',
    textColor: '#555555',

    sucessBackground: '#B9E4CA',
    sucess: '#0C622E',
    dangerBackground: '#f5c9d1',
    danger: '#842e3c',
  },
  colorPalette: greenPalette,
});
