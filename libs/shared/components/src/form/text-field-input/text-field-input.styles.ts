import { Input } from 'native-base';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const LabelGroup = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  gap: 5px;
`;

export const Label = styled.Text`
  font-size: 13px;
  color: ${(props) => props.theme.colorMode.colors.textColor};
`;

export const IsRequired = styled.Text`
  font-size: 13px;
  color: ${(props) => props.theme.colorMode.colors.danger};
`;

export const BaseInput = styled(Input)<{ active: boolean; error?: string }>`
  height: 50px;
  border-radius: 5px;
  border-width: 1.5px;
  background-color: ${(props) => props.theme.colorMode.colors.background};
  font-size: 15px;
  color: ${(props) => props.theme.colorMode.colors.textColor};

  border-color: ${(props) =>
    props.error
      ? props.theme.colorMode.colors.danger
      : props.active
      ? props.theme.colorPalette.primary
      : props.theme.colorMode.colors.textColor};
`;

export const LabelError = styled.Text`
  margin-top: 5px;
  color: ${(props) => props.theme.colorMode.colors.danger};
  font-size: 12px;
  width: 100%;
`;
