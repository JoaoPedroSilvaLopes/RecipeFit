import { Modal } from 'native-base';
import styled from 'styled-components/native';

export const ModalWrapper = styled(Modal)``;

export const ModalContent = styled(Modal.Content)`
  max-width: 350px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ModalCloseButton = styled(Modal.CloseButton)`
  background-color: ${(props) => props.theme.colors.background};
  color: red;
  text-align: justify;
`;

export const ModalHeader = styled(Modal.Body)`
  background-color: ${(props) => props.theme.colors.background};
  text-align: justify;
`;

export const ModalBody = styled(Modal.Body)`
  font-size: 50px;
  background-color: ${(props) => props.theme.colors.background};
  text-align: justify;
  justify-content: center;
  gap: 10px
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.textColor};
`;
