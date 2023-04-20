
import { DefaultTheme } from 'styled-components';
import { greenPalette } from '../palette';
import variables from '../common/common';

// import { usePalette } from '@nx-workspace//shared/core';
// const { colorPalette } = usePalette()

export const themeLight: DefaultTheme = Object.assign({}, variables, {
  title: 'light',
  colors: {
    background: '#ffffff',
    backgroundContent: '#EDEDED',
    suportColor: '#ffffff',
    textColor: '#555555',
    danger: '#E6412C',

    sucessMessageBackground: '#B9E4CA',
    sucessMessage: '#0C622E',
    dangerMessageBackground: '#f5c9d1',
    dangerMessage: '#842e3c',
  },
  colorPalette: greenPalette,
});