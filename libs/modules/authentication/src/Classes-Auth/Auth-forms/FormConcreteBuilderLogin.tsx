import { TextFieldInput } from '@nx-workspace//shared/components';
import { FieldConfig, FormBuilder } from './FormBuilder';
import { Controller, FieldValues } from 'react-hook-form';

export class FormConcreteBuilderLogin<
  T extends FieldValues
> extends FormBuilder<T> {
  protected BuildFieldComponent(field: FieldConfig<T>) {
    const { control, formState } = this.getForm();
    const { controlLabel, type, label, placeholder, required } = field;

    switch (type) {
      case 'text':
        return (
          <Controller
            name={controlLabel}
            control={control}
            render={({ field: { value, onChange }, ...rest }) => (
              <TextFieldInput
                label={label}
                placeholder={placeholder}
                isRequired={required}
                error={
                  formState.errors[controlLabel]?.message as string | undefined
                }
                value={value}
                onChangeText={onChange}
                autoCapitalize="none"
                {...rest}
              />
            )}
          />
        );
      case 'password':
        return (
          <Controller
            name={controlLabel}
            control={control}
            render={({ field: { value, onChange }, ...rest }) => (
              <TextFieldInput
                label={label}
                placeholder={placeholder}
                isRequired={required}
                error={
                  formState.errors[controlLabel]?.message as string | undefined
                }
                value={value}
                secureTextEntry={true}
                onChangeText={onChange}
                autoCapitalize="none"
                {...rest}
              />
            )}
          />
        );
      default:
        return;
    }
  }
}
