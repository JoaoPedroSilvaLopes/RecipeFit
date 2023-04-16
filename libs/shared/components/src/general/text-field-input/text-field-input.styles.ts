import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text<{ isRequired?: boolean }>`
  font-size: 12px;
  color: ${(props) => props.theme.colors.textColor};
  margin-bottom: 5px;
`;

export const BaseInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.textColor,
  evelation: 10,
  shadowColor: '#000',
}))<{ active: boolean; error?: string }>`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border-width: 1px;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
  padding: 0px 15px;

  font-size: 15px;
  color: ${(props) => props.theme.colors.textColor};

  border-color: ${(props) =>
    props.error
      ? props.theme.colors.danger
      : props.active
      ? props.theme.colorPalette.primary
      : props.theme.colors.textColor};
`;

export const LabelError = styled.Text`
  margin-top: 5px;
  color: ${(props) => props.theme.colors.danger};
  font-size: 12px;
  width: 100%;
`;
