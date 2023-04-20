import { Button as BaseButton } from 'native-base';
import styled from 'styled-components/native';

export const Button = styled(BaseButton)`
  width: 150px;
  height: 45px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colorPalette.secondary};
`;

export const Label = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
`;
