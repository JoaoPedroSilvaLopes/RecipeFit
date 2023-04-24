import { Controller, useFormContext } from 'react-hook-form';
import {
  Button,
  TextFieldInput,
  FormProps,
} from '@nx-workspace//shared/components';
import { LoginFormInput } from '@nx-workspace//shared/domain-types';

import * as S from './login-form.styles';

type Props = FormProps<LoginFormInput> & {
  isLoading: boolean;
};

const LoginForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const { control, formState, handleSubmit } = useFormContext<LoginFormInput>();

  return (
    <S.TextFieldGroup>
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
        name="senha"
        control={control}
        render={({ field: { value, onChange }, ...rest }) => (
          <TextFieldInput
            label="Senha"
            placeholder="Insira sua Senha"
            error={formState.errors.senha?.message}
            isRequired
            secureTextEntry={true}
            value={value}
            onChangeText={onChange}
            autoCapitalize="none"
            {...rest}
          />
        )}
      />
      <Button
        title="Entrar"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
        isLoading={isLoading}
      />
    </S.TextFieldGroup>
  );
};

export default LoginForm;
