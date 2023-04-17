import styled from 'styled-components/native';

export const Label = styled.Text`
  font-size: 15px;
  color: ${(props) =>
    props.theme.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colors.textColor};
`;