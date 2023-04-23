import { ModalProps } from '../../types';
import { TextButton } from '../../general';
import * as S from './modal.styles';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, ...rest }) => {
  return (
    <S.ModalWrapper isOpen={isOpen} onClose={onClose} {...rest}>
      <S.ModalContent>
        <S.ModalCloseButton />
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
        </S.ModalHeader>
        <S.ModalBody>
          <S.TextContent>{message}</S.TextContent>
        </S.ModalBody>
        <S.ModalFooter><TextButton title="Confirmar" /></S.ModalFooter>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
