import {
  ConfirmModal,
  ConfirmModalProps,
} from '@nx-workspace//shared/components';
import { ExerciciosService } from '@nx-workspace//shared/services';
import { useState } from 'react';

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
  const [isLoading, setIsloading] = useState<boolean>(false);
  const onConfirm = () => {
    if (id) {
      setIsloading(true);
      ExerciciosService.remove({ id });
      ExerciciosService.removeFoto({ id })
        .then(() => setIsloading(false))
        .catch(() => setIsloading(false))
        .finally(() => onClose());
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
