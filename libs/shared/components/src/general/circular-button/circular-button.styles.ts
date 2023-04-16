import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CircularButton = styled.TouchableOpacity.attrs({
  evelation: 8,
  shadowColor: '#000',
})`
  width: 200px;
  height: 200px;
  border-width: 12px;
  border-radius: 150px;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 10px;
  gap: -80px;

  background-color: ${(props) => props.theme.colors.backgroundContent};
  border-color: ${(props) => props.theme.colors.suportColor};
`;

export const Label = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) =>
    props.theme.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorPalette.secondary};
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

export const RightImage = styled.Image`
  width: 126px;
  height: 126px;
  margin: -25px 0px;
  position: absolute;
  top: 100px;
  right: -50px;
  transform: rotate(350deg);
`;

export const LeftImage = styled.Image`
  width: 126px;
  height: 126px;
  margin: -25px 0px;
  position: absolute;
  top: 100px;
  right: 90px;
  transform: rotate(10deg);
`;

export const styles = StyleSheet.create({
  circularButton: {
    width: 200,
    height: 200,
    backgroundColor: '#555555',
    borderWidth: 12,
    borderRadius: 150,
    borderColor: '#333333',
    alignItems: 'flex-end',
    marginBottom: 10,

    justifyContent: 'center',
    gap: -80,
    elevation: 8,
  },
});
