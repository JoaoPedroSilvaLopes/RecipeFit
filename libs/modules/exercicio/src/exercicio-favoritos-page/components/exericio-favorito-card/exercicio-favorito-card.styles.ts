import { IconButton } from '@nx-workspace//shared/components';
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
    props.theme.title === 'dark'
      ? props.theme.colors.backgroundContent
      : props.theme.colors.background};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.textColor};
`;

export const HearthIcon = styled(IconButton)`
  width: auto;
  height: auto;
  background-color: transparent;
`;
