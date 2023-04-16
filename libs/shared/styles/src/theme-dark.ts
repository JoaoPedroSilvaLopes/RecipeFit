import { DefaultTheme } from 'styled-components';
import { bluePalette, greenPalette, orangePalette } from './palette';
import variables from './common';

export const themeDark: DefaultTheme = Object.assign({}, variables, {
  title: 'dark',
  colors: {
    background: '#444444',
    backgroundContent: '#555555',
    suportColor: '#333333',
    textColor: '#ffffff',

    sucessBackground: '#B9E4CA',
    sucess: '#0C622E',
    dangerBackground: '#f5c9d1',
    danger: '#842e3c',
  },
  colorPalette: greenPalette,
});
