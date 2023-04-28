import { Controller, useFormContext } from 'react-hook-form';
import {
  ImagePicker,
  Select,
  TextButton,
  TextFieldInput,
  FormProps,
} from '@nx-workspace//shared/components';
import { ExercicioFormInput } from '@nx-workspace//shared/domain-types';
import { useLoadCategoria } from '../../hooks';
import { useEffect, useState } from 'react';

import * as S from './exercicio-form.styles';

type Props = FormProps<ExercicioFormInput> & {
  isLoading: boolean;
};

const ExercicioForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const { control, formState, handleSubmit, setValue } =
    useFormContext<ExercicioFormInput>();
  const categoriasExercicios = useLoadCategoria();
  const [foto, setFoto] = useState<string | undefined>(undefined);

  useEffect(() => {
    setValue('foto', foto);
  }, [foto]);

  return (
    <>
      <S.TextFieldGroup>
        <Controller
          name="foto"
          control={control}
          render={({ field: { value }, ...rest }) => (
            <ImagePicker image={value} onImageChange={setFoto} {...rest} />
          )}
        />
        <Controller
          name="nome"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <TextFieldInput
              label="Nome"
              placeholder="Insira o nome do exercício"
              error={formState.errors.nome?.message}
              isRequired
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
              {...rest}
            />
          )}
        />
        <Controller
          name="categoriaId"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <Select
              selectedValue={value}
              accessibilityLabel="Categoria"
              label="Categoria"
              isRequired
              onValueChange={(itemValue: string) => {
                onChange(itemValue);
              }}
              placeholder="Insira uma categoria"
              data={
                categoriasExercicios &&
                categoriasExercicios.map((value) => {
                  return {
                    label: value.nomeCategoria,
                    value: value.id,
                  };
                })
              }
              error={formState.errors.categoriaId?.message}
              {...rest}
            />
          )}
        />
      </S.TextFieldGroup>
      <S.FooterButtonGroup>
        <TextButton
          title="Confirmar"
          onPress={handleSubmit(onSubmit)}
          disabled={!formState.isValid}
          isLoading={isLoading}
        />
      </S.FooterButtonGroup>
    </>
  );
};

export default ExercicioForm;
