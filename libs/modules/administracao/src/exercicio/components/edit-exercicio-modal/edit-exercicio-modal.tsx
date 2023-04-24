import { yupResolver } from '@hookform/resolvers/yup';
import {
  Modal,
  ModalProps,
} from '@nx-workspace//shared/components';
import {
  ExercicioFormInput,
  exercicioValidationSchema,
} from '@nx-workspace//shared/domain-types';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ExerciciosService } from '@nx-workspace//shared/services';
import ExercicioForm from '../exercicio-form/exercicio-form';
import { useLoadById } from '../../hooks';

type Props = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  id?: string;
  nome?: string;
};

const EditExercicioModal: React.FC<Props> = ({ id, nome, isOpen, onClose: onHide }) => {
  const form = useForm<ExercicioFormInput>({
    resolver: yupResolver(exercicioValidationSchema),
    mode: 'onChange',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);

  const { data: exercicio } = useLoadById({ id: id })

  //console.log(exercicio)



  // const { isLoading, setExercicio, setIsLoading } = useAdd()

  const onSubmit: SubmitHandler<ExercicioFormInput> = (data) => {
    // useAdd({data: data})
    onClose();
  };

  const onClose = () => {
    onHide();
    form.reset();
  };

  const modalConfigs: ModalProps = {
    title: 'Edição de Exercício',
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

export default EditExercicioModal;
