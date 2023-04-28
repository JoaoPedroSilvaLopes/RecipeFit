import {
  ConfirmModal,
  ConfirmModalProps,
} from '@nx-workspace//shared/components';
import { ReceitasService } from '@nx-workspace//shared/services';
import { useState } from 'react';

type Props = Pick<ConfirmModalProps, 'isOpen' | 'onClose'> & {
  id?: string;
  nome?: string;
};

const RemoveReceitaModal: React.FC<Props> = ({ isOpen, onClose, id, nome }) => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const onConfirm = () => {
    if (id) {
      setIsloading(true);
      ReceitasService.remove({ id });
      ReceitasService.removeFoto({ id })
        .then(() => setIsloading(false))
        .catch(() => setIsloading(false))
        .finally(() => onClose());
    }
  };

  const confirmModalConfigs: ConfirmModalProps = {
    title: 'Remoção de Receita',
    message: `Tem certeza de que deseja remover a receita ${nome} do banco de dados?`,
    isOpen,
    onClose,
    isLoading,
    onConfirm,
  };

  return <ConfirmModal {...confirmModalConfigs} />;
};

export default RemoveReceitaModal;
