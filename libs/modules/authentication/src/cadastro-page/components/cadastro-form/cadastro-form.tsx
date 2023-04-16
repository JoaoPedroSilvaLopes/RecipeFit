import { useNavigation } from '@react-navigation/native';
import { Controller, useFormContext } from 'react-hook-form';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CadastroFormInput } from '@nx-workspace//shared/domain-types';
import {
  NumberFieldInput,
  TextButton,
  TextFieldInput,
  formProps,
} from '@nx-workspace//shared/components';

import * as S from './cadastro-form.styles';

type Props = formProps<CadastroFormInput>;

const CadastroForm: React.FC<Props> = ({ onSubmit }) => {
  const { control, formState, handleSubmit } =
    useFormContext<CadastroFormInput>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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
              {...rest}
            />
          )}
        />
        <Controller
          name="dataNascimento"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <NumberFieldInput
              label="Data de Nascimento"
              mask="##/##/####"
              placeholder="Insira sua Data de Nascimento"
              error={formState.errors.dataNascimento?.message}
              isRequired
              value={value}
              onChangeText={onChange}
              {...rest}
            />
          )}
        />
        <Controller
          name="senha"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <TextFieldInput
              label="Senha"
              placeholder="Insira sua Senha"
              error={formState.errors.senha?.message}
              isRequired
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
              secureTextEntry={true}
              {...rest}
            />
          )}
        />
        <Controller
          name="confirmarSenha"
          control={control}
          render={({ field: { value, onChange }, ...rest }) => (
            <TextFieldInput
              label="Confirmar Senha"
              placeholder="Confirme sua Senha"
              error={formState.errors.confirmarSenha?.message}
              isRequired
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
              secureTextEntry={true}
              {...rest}
            />
          )}
        />
      </S.TextFieldGroup>
      <S.FooterButtonGroup>
        <TextButton
          title="Retornar"
          onPress={() => navigation.navigate('Login')}
        />
        <TextButton title="Concluir" onPress={handleSubmit(onSubmit)} />
      </S.FooterButtonGroup>
    </>
  );
};

export default CadastroForm;
