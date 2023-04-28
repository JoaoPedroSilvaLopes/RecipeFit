import {
  ConfirmModal,
  ConfirmModalProps,
} from '@nx-workspace//shared/components';

type Props = Pick<ConfirmModalProps, 'isOpen' | 'onClose'> & {
  id?: number;
  nome?: string;
};

const RemoveReceitaModal: React.FC<Props> = ({
  isOpen,
  onClose,
  id,
  nome,
}) => {
  const onConfirm = () => {
    console.log('');
  };

  const confirmModalConfigs: ConfirmModalProps = {
    title: 'Remoção de Receita',
    message: `Tem certeza de que deseja remover a receita ${nome} dos seus favoritos?`,
    isOpen,
    onClose,
    //isLoading,
    onConfirm
  };

  return <ConfirmModal {...confirmModalConfigs} />;
};

export default RemoveReceitaModal;
