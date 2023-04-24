import { ConfirmModalProps } from '../../types';
import { TextButton } from '../../general';
import * as S from './confirm-modal.styles';

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  onConfirm,
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
          <S.TextContent>{message}</S.TextContent>
        </S.ModalBody>
        <S.ModalFooter>
          <TextButton
            title="Confirmar"
            onPress={() => onConfirm()}
            isLoading={isLoading}
          />
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default ConfirmModal;
