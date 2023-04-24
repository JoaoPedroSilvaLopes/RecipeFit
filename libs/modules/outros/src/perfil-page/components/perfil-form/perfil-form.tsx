import { Controller, useFormContext } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Button,
  TextButton,
  TextFieldInput,
  FormProps,
} from '@nx-workspace//shared/components';
import { UsuarioFormInput } from '@nx-workspace//shared/domain-types';

import * as S from './perfil-form.styles';

type Props = FormProps<UsuarioFormInput> & {
  isLoading: boolean;
  isRead: boolean;
};

const PerfilForm: React.FC<Props> = ({ onSubmit, isLoading, isRead }) => {
  const { control, formState, handleSubmit } =
    useFormContext<UsuarioFormInput>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const returnPage = () => {
    navigation.goBack();
  };

  return (
    <>
      <S.TextFieldGroup>
        <Controller
          name="nome"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <TextFieldInput
              label="Nome"
              placeholder="Insira seu nome"
              isRequired
              isReadOnly={isRead}
              onChangeText={onChange}
              autoCapitalize="none"
              error={formState.errors.nome?.message}
              value={value}
              {...rest}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <TextFieldInput
              label="E-mail"
              placeholder="Insira seu E-mail"
              error={formState.errors.email?.message}
              isRequired
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
              isReadOnly={isRead}
              {...rest}
            />
          )}
        />
        <Controller
          name="peso"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <TextFieldInput
              label="Peso (kg)"
              placeholder="Insira seu Peso"
              error={formState.errors.peso?.message}
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
              isReadOnly={isRead}
              maxLength={3}
              {...rest}
            />
          )}
        />
        <Controller
          name="altura"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <TextFieldInput
              label="Altura (cm)"
              placeholder="Insira sua Altura"
              error={formState.errors.altura?.message}
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
              isReadOnly={isRead}
              maxLength={3}
              {...rest}
            />
          )}
        />
      </S.TextFieldGroup>
      <S.FooterButtonGroup>
        {isRead ? (
          <TextButton title="Retornar" onPress={() => returnPage()} />
        ) : (
          <Button
            title="Enviar"
            onPress={handleSubmit(onSubmit)}
            disabled={!formState.isValid}
            isLoading={isLoading}
          />
        )}
      </S.FooterButtonGroup>
    </>
  );
};

export default PerfilForm;
