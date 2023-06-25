import { yupResolver } from '@hookform/resolvers/yup';
import { ReactNode } from 'react';
import {
  FieldValues,
  Path,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from 'react-hook-form';
import { ObjectSchema } from 'yup';

export interface FieldConfig<T> {
  type: 'text' | 'select' | 'textarea' | 'password';
  controlLabel: Path<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export abstract class FormBuilder<T extends FieldValues> {
  private fields: ReactNode[] = [];
  private formParams: typeof useForm<T, any> = useForm<T, any>;
  private form: UseFormReturn<T>;

  constructor(validationSchema: ObjectSchema<any, any, any, any>) {
    this.form = this.formParams({
      mode: 'onChange',
      resolver: yupResolver(validationSchema),
    });
  }

  setField(field: FieldConfig<T>): FormBuilder<T> {
    this.fields.push(this.BuildFieldComponent(field));
    return this;
  }

  protected abstract BuildFieldComponent(field: FieldConfig<T>): ReactNode;

  getForm() {
    return this.form;
  }

  getResult(): ReactNode {
    return this.fields;
  }

  resetForm() {
    this.form.reset();
  }

  onSubmit(onSubmit: SubmitHandler<T>) {
    return this.form.handleSubmit(onSubmit);
  }
}
