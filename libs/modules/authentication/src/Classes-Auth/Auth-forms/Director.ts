import { FormConcreteBuilderLogin } from './FormConcreteBuilderLogin';
import {
  LoginFormInput,
  loginUsuarioValidationSchema,
} from '@nx-workspace//shared/domain-types';
import { FieldConfig, FormBuilder } from './FormBuilder';
import { FieldValues } from 'react-hook-form';

export class Director {
  private _builder: FormBuilder<any> | undefined;

  private getBuilder<T extends FieldValues>(builder: FormBuilder<T>, fields: FieldConfig<T>[] | undefined) {
    this._builder = builder;
    fields &&
      fields.map((field) => {
        this._builder?.setField(field);
      });

    return this._builder;
  }

  public getLoginForm(): FormBuilder<LoginFormInput> | undefined {
    this.getBuilder<LoginFormInput>(
      new FormConcreteBuilderLogin<LoginFormInput>(loginUsuarioValidationSchema),
      [
        {
          controlLabel: 'email',
          type: 'text',
          label: 'E-mail',
          placeholder: 'Insira seu E-mail',
          required: true,
        },
        {
          controlLabel: 'senha',
          type: 'password',
          label: 'Senha',
          placeholder: 'Insira sua Senha',
          required: true,
        }
      ]
    );

    return this._builder;
  }
}
