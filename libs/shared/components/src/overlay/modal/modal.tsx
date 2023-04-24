import { ModalProps } from '../../types';
import * as S from './modal.styles';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  isLoading,
  ...rest
}) => {
  return (
    <S.ModalWrapper isOpen={isOpen} onClose={onClose} {...rest}>
      <S.ModalContent>
        <S.ModalCloseButton />
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
        </S.ModalHeader>
        <S.ModalBody>
          {children}
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
