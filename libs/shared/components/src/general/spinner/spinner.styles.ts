import { Spinner as BaseSpinner } from 'native-base';
import styled from 'styled-components/native';

export const Spinner = styled(BaseSpinner).attrs((props) => ({
  color: props.theme.colorPalette.secondary,
}))``;
