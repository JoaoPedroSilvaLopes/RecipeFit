import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, ModalProps } from '@nx-workspace//shared/components';
import {
  ReceitaFormInput,
  receitaValidationSchema,
} from '@nx-workspace//shared/domain-types';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLoadById } from '../../hooks';
import ReceitaForm from '../receita-form/receita-form';
import { ReceitasService } from '@nx-workspace//shared/services';

type Props = Pick<ModalProps, 'isOpen' | 'onClose'> & {
  id?: string;
  nome?: string;
};

const EditReceitaModal: React.FC<Props> = ({
  id,
  nome,
  isOpen,
  onClose: onHide,
}) => {
  const form = useForm<ReceitaFormInput>({
    resolver: yupResolver(receitaValidationSchema),
    mode: 'onChange',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);
  const { data: receita } = useLoadById({ id });

  console.log(receita)

  useEffect(() => {
    form.clearErrors();
    if (receita) {
      form.setValue('foto', receita.foto);
      form.setValue('nome', receita?.nome);
      form.setValue('ingredientes', receita.ingredientes);
      form.setValue('modoDePreparo', receita.modoDePreparo);
      form.setValue('categoriaId', receita.categoriaId);
    }
  }, [receita]);

  const onSubmit: SubmitHandler<ReceitaFormInput> = (data) => {
    setIsloading(true);
    ReceitasService.update({ id, data });
    ReceitasService.updateFoto({ id, imageUrl: data.foto })
      .then()
      .catch()
      .finally(() => setIsloading(false));
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
