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
  color: ${(props) => props.theme.colors.textColor};
`;

export const IsRequired = styled.Text`
  font-size: 13px;
  color: ${(props) => props.theme.colors.danger};
`;

export const BaseInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.textColor,
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
