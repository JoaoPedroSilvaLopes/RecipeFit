import { Modal, ModalProps } from '@nx-workspace//shared/components';

type Props = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  id?: number;
  nome?: string;
};

const RemoveExercicioModal: React.FC<Props> = ({
  isOpen,
  onClose,
  id,
  nome,
}) => {
  const onConfirm = () => {
    console.log('Confirmado')
  }

  const modalConfigs: ModalProps = {
    title: 'Remoção de Exercício',
    message: `Tem certeza de que deseja remover o exercício ${nome} dos seus favoritos?`,
    isOpen,
    onClose,
    //isLoading,
    //onConfirm
  }

  return (
    <Modal {...modalConfigs}/>
  );
};

export default RemoveExercicioModal;
