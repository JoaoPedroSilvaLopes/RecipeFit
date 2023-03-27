import {DefaultTheme} from 'styled-components';
import variables from './common';

export const themeLight: DefaultTheme = Object.assign({}, variables, {
  title: 'light',
  blueThemeColors: {
    primary: '#80C8FF',
    secondary: '#005D8C',
    background: '#ffffff',
    backgroundContent: '#EDEDED',
    suportColor: '#ffffff',
    textPrimary: '#555555',

    lightColor: '#80C8FF',
    darkColor: '#005D8C',

    sucessBackground: '#B9E4CA',
    sucess: '#0C622E',
    danger: '#FF6C6C',
  },
  orangeThemeColors: {
    primary: '#FFB577',
    secondary: '#C57742',
    background: '#ffffff',
    backgroundContent: '#EDEDED',
    suportColor: '#ffffff',
    textPrimary: '#555555',

    lightColor: '#FFB577',
    darkColor: '#C57742',

    sucessBackground: '#B9E4CA',
    sucess: '#0C622E',
    danger: '#FF6C6C',
  },
  greenThemeColors: {
    primary: '#80CBC4',
    secondary: '#207567',
    background: '#ffffff',
    backgroundContent: '#EDEDED',
    suportColor: '#ffffff',
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
