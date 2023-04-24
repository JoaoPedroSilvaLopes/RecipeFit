import { Box } from 'native-base';
import styled from 'styled-components/native';

export const Card = styled(Box)`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  margin-bottom: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  background-color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.backgroundContent
      : props.theme.colorMode.colors.background};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: ${(props) => props.theme.colorMode.colors.textColor};
`;

export const Actions = styled(Box)`
  width: auto;
  height: auto;
  flex-direction: row;
`;
