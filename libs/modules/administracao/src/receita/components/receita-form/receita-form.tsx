import { Controller, useFormContext } from 'react-hook-form';
import {
  ImagePicker,
  Select,
  TextButton,
  TextFieldInput,
  FormProps,
  TextArea,
} from '@nx-workspace//shared/components';
import { ReceitaFormInput } from '@nx-workspace//shared/domain-types';
import { useLoadCategoria } from '../../hooks';
import { useEffect, useState } from 'react';

import * as S from './receita-form.styles';

type Props = FormProps<ReceitaFormInput> & {
  isLoading: boolean;
};

const ReceitaForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const { control, formState, handleSubmit, setValue } =
    useFormContext<ReceitaFormInput>();
  const categoriasReceitas = useLoadCategoria();
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
          name="ingredientes"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <TextArea
              label='Ingredientes'
              placeholder='Insira os ingredientes'
              isRequired
              onChangeText={(val) => onChange(val)}
              defaultValue={value}
              {...rest}
            />
          )}
        />
        <Controller
          name="modoDePreparo"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <TextArea
              label='Modo de Preparo'
              placeholder='Insira o modo de preparo'
              isRequired
              onChangeText={(val) => onChange(val)}
              defaultValue={value}
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
                categoriasReceitas &&
                categoriasReceitas.map((value) => {
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

export default ReceitaForm;
