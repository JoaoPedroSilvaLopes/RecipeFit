import styled from 'styled-components/native';

export const Title = styled.Text`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.colorMode.colors.textColor};
  width: 100%;
`;

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const CircleButtonGroup = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
