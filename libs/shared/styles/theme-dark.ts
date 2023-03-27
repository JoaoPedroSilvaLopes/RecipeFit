import {DefaultTheme} from 'styled-components';
import variables from './common';

export const themeDark: DefaultTheme = Object.assign({}, variables, {
  title: 'dark',
  blueThemeColors: {
    primary: '#005D8C',
    secondary: '#80C8FF',
    background: '#444444',
    backgroundContent: '#555555',
    suportColor: '#333333',
    textPrimary: '#ffffff',

    lightColor: '#80C8FF',
    darkColor: '#005D8C',

    sucessBackground: '#B9E4CA',
    sucess: '#0C622E',
    danger: '#FF6C6C',
  },
  orangeThemeColors: {
    primary: '#C57742',
    secondary: '#FFB577',
    background: '#ffffff',
    backgroundContent: '#EDEDED',
    suportColor: '#333333',
    textPrimary: '#555555',

    lightColor: '#FFB577',
    darkColor: '#C57742',

    sucessBackground: '#B9E4CA',
    sucess: '#0C622E',
    danger: '#FF6C6C',
  },
  greenThemeColors: {
    primary: '#207567',
    secondary: '#80CBC4',
    background: '#ffffff',
    backgroundContent: '#EDEDED',
    suportColor: '#333333',
    textPrimary: '#555555',

    lightColor: '#80CBC4',
    darkColor: '#207567',

    sucessBackground: '#B9E4CA',
    sucess: '#0C622E',
    danger: '#FF6C6C',
  },
  colorsPalettes: {
    bluePalettePrimary: '#80C8FF',
    bluePaletteSecondary: '#005D8C',

    orangePalettePrimary: '#FFB577',
    orangePaletteSecondary: '#C57742',

    greenPalettePrimary: '#80CBC4',
    greenPaletteSecondary: '#207567',

    darkPaletterPrimary: '#555555',
    darkPaletterSecondary: '#444444',

    lightPaletterPrimary: '#ffffff',
    lightPaletterSecondary: '#ffffff',
  },
});
