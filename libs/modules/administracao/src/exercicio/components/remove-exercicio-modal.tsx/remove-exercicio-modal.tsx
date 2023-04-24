import {
  ConfirmModal,
  ConfirmModalProps,
} from '@nx-workspace//shared/components';
import { useRemove } from '../../hooks';

type Props = Pick<ConfirmModalProps, 'isOpen' | 'onClose'> & {
  id?: string;
  nome?: string;
};

const RemoveExercicioModal: React.FC<Props> = ({
  isOpen,
  onClose,
  id,
  nome,
}) => {
  const { isLoading, setId } = useRemove();

  const onConfirm = () => {
    if (id) {
      setId(id);
      onClose();
    }
  };

  const confirmModalConfigs: ConfirmModalProps = {
    title: 'Remoção de Exercício',
    message: `Tem certeza de que deseja remover o exercício ${nome} do banco de dados?`,
    isOpen,
    onClose,
    isLoading,
    onConfirm,
  };

  return <ConfirmModal {...confirmModalConfigs} />;
};

export default RemoveExercicioModal;
