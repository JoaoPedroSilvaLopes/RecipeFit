
import { ColorMode } from 'styled-components';
import variables from '../common/common';

export const themeLight: ColorMode = Object.assign({}, variables, {
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
});
