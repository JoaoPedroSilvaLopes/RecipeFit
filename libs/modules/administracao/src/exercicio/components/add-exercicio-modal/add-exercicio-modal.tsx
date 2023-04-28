import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, ModalProps } from '@nx-workspace//shared/components';
import {
  ExercicioFormInput,
  exercicioValidationSchema,
} from '@nx-workspace//shared/domain-types';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import ExercicioForm from '../exercicio-form/exercicio-form';
import { ExerciciosService } from '@nx-workspace//shared/services';

type Props = Pick<ModalProps, 'isOpen' | 'onClose'>;

const AddExercicioModal: React.FC<Props> = ({ isOpen, onClose: onHide }) => {
  const form = useForm<ExercicioFormInput>({
    resolver: yupResolver(exercicioValidationSchema),
    mode: 'onChange',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ExercicioFormInput> = (data) => {
    setIsloading(true);
    ExerciciosService.addFoto({ imageUri: data.foto, nome: data.nome });
    ExerciciosService.add({ data: data })
      .then(() => setIsloading(false))
      .catch(() => setIsloading(false))
      .finally(() => onClose());
  };

  const onClose = () => {
    onHide();
    form.reset();
  };

  const modalConfigs: ModalProps = {
    title: 'Cadastro de Exercício',
    isOpen,
    onClose,
  };

  return (
    <Modal {...modalConfigs}>
      <FormProvider {...form}>
        <ExercicioForm onSubmit={onSubmit} isLoading={isLoading} />
      </FormProvider>
    </Modal>
  );
};

export default AddExercicioModal;
