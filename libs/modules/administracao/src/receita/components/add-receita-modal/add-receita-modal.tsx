import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, ModalProps } from '@nx-workspace//shared/components';
import {
  ReceitaFormInput,
  receitaValidationSchema,
} from '@nx-workspace//shared/domain-types';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FotoService, ReceitasService } from '@nx-workspace//shared/services';
import ReceitaForm from '../receita-form/receita-form';

type Props = Pick<ModalProps, 'isOpen' | 'onClose'>;

const AddReceitaModal: React.FC<Props> = ({ isOpen, onClose: onHide }) => {
  const form = useForm<ReceitaFormInput>({
    resolver: yupResolver(receitaValidationSchema),
    mode: 'onChange',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ReceitaFormInput> = (data) => {
    setIsloading(true)
    FotoService.add({ imageUri: data.foto, nome: data.nome });
    ReceitasService.add({ data: data })
      .then(() => setIsloading(false))
      .catch(() => setIsloading(false))
      .finally(() => onClose());
  };

  const onClose = () => {
    onHide();
    form.reset();
  };

  const modalConfigs: ModalProps = {
    title: 'Cadastro de Receita',
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

export default AddReceitaModal;
