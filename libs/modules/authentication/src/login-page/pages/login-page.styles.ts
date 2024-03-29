import { TextButton } from '@nx-workspace//shared/components';
import styled from 'styled-components/native';

export const Screen = styled.View`
  width: 100%;
  height: 100%;
  padding: 15%;
  background-color: ${(props) => props.theme.colorMode.colors.background};
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 45px;
  font-weight: bold;
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorMode.colors.background};
  width: 100%;
`;

export const Container = styled.View`
  width: 100%;
  gap: 20px;
  align-items: center;
`;

export const FooterContainer = styled.View`
  width: 100%;
  padding: 0px 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;

export const FooterButtonGroup = styled.View`
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const FooterText = styled.Text`
  font-size: 15px;
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorMode.colors.textColor};
`;

export const FooterTextButton = styled(TextButton)`
  font-weight: bold;
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorPalette.secondary};
`;
