import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Foundation';
import { IconButton } from '../../general';

export const MessageContainer = styled.View<{ variant: string }>`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: ${(props) =>
    props.variant === 'positive'
      ? props.theme.colors.sucessMessageBackground
      : props.theme.colors.dangerMessageBackground};
`;

export const ListContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const ListText = styled.Text<{ variant: string }>`
  width: 85%;
  text-align: justify;
  font-size: 12px;

  color: ${(props) =>
    props.variant === 'positive'
      ? props.theme.colors.sucessMessage
      : props.theme.colors.dangerMessage};
`

export const OnCloseButton = styled(IconButton)<{ variant: string }>`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.variant === 'positive'
      ? props.theme.colors.sucessMessageBackground
      : props.theme.colors.dangerMessageBackground};
`

export const IconWrapper = styled(Icon)<{ variant: string }>`
  color: ${(props) =>
    props.variant === 'positive'
      ? props.theme.colors.sucessMessage
      : props.theme.colors.dangerMessage};
`
