import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity<{ isDisable: boolean }>`
  width: 150px;
  height: 45px;
  background-color: ${(props) => props.theme.colorPalette.secondary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isDisable ? 0.65 : 1)};
`;

export const Label = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
`;

export const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 45,
    backgroundColor: '#005D8C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    elevation: 8,
  },
  disabled: {
    opacity: 0.65,
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Gothic A1',
  },
  activeIndicator: {
    color: '#ffffff',
  },
});
