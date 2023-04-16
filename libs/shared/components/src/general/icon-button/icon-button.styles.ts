import styled from 'styled-components/native';

export const IconButton = styled.TouchableOpacity`
  width: 35;
  height: 35;
  border-radius: 30px;
  background-color: ${props => props.theme.colorPalette.secondary};
  justify-content: center;
  align-items: center;
`;

