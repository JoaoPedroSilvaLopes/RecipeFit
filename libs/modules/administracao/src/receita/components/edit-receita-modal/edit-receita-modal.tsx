import { yupResolver } from '@hookform/resolvers/yup';
import {
  Modal,
  ModalProps,
} from '@nx-workspace//shared/components';
import {
  ReceitaFormInput,
  receitaValidationSchema,
} from '@nx-workspace//shared/domain-types';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLoadById } from '../../hooks';
import ReceitaForm from '../receita-form/receita-form';

type Props = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  id?: string;
  nome?: string;
};

const EditReceitaModal: React.FC<Props> = ({ id, nome, isOpen, onClose: onHide }) => {
  const form = useForm<ReceitaFormInput>({
    resolver: yupResolver(receitaValidationSchema),
    mode: 'onChange',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);

  const { data: receita } = useLoadById({ id: id })

  useEffect(() => {
    if (receita) {
      form.reset({
        nome: receita.nome,
        ingredientes: receita.ingredientes,
        modoDePreparo: receita.modoDePreparo,
        categoriaId: receita.categoriaId
      })
    }
  }, [receita])

  // const { isLoading, setExercicio, setIsLoading } = useAdd()

  const onSubmit: SubmitHandler<ReceitaFormInput> = (data) => {
    // useAdd({data: data})
    onClose();
  };

  const onClose = () => {
    onHide();
    form.reset();
  };

  const modalConfigs: ModalProps = {
    title: 'Edição de Receita',
    isOpen,
    onClose,
  };

  return (
    <Modal {...modalConfigs}>
      <FormProvider {...form}>
        <ReceitaForm onSubmit={onSubmit} isLoading={isLoading} />
      </FormProvider>
    </Modal>
  );
};

export default EditReceitaModal;
