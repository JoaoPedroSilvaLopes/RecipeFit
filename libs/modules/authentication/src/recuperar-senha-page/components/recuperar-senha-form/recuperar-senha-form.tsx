import { Controller, useFormContext } from 'react-hook-form';
import {
  Button,
  TextFieldInput,
  formProps,
} from '@nx-workspace//shared/components';
import { RecuperarSenhaFormInput } from '@nx-workspace//shared/domain-types';

import * as S from './recuperar-senha-form.styles';

type Props = formProps<RecuperarSenhaFormInput> & {
  isLoading: boolean;
};

const RecuperarSenhaForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const { control, formState, handleSubmit } = useFormContext<RecuperarSenhaFormInput>();

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
      <Button
        title="Enviar"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
        isLoading={isLoading}
      />
    </S.TextFieldGroup>
  );
};

export default RecuperarSenhaForm;
