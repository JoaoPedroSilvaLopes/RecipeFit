import { DefaultTheme } from 'styled-components';
import { greenPalette } from '../palette';
import variables from '../common/common';

// import { usePalette } from '@nx-workspace//shared/core';
// const { colorPalette } = usePalette()

export const themeDark: DefaultTheme = Object.assign({}, variables, {
  title: 'dark',
  colors: {
    background: '#444444',
    backgroundContent: '#555555',
    suportColor: '#333333',
    textColor: '#ffffff',
    danger: '#FF6C6C',

    sucessMessageBackground: '#B9E4CA',
    sucessMessage: '#0C622E',
    dangerMessageBackground: '#f5c9d1',
    dangerMessage: '#842e3c',
  },
  colorPalette: greenPalette,
});
