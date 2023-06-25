import { Director } from '.';
import {
  AuthError,
  AuthErrorHandler,
  useErrors,
} from '@nx-workspace//shared/core';
import { Navigate } from './Navigate';
import { UsuarioService } from '@nx-workspace//shared/services';
import { LoginFormInput } from '@nx-workspace//shared/domain-types';

export class LoginPageFacade {
  private navigator = new Navigate();
  private form = new Director().getLoginForm();
  private erros = useErrors();

  getForm() {
    return this.form;
  }

  getErrors() {
    return this.erros.errors;
  }

  setErrors(error: AuthError) {
    const errorMessage = AuthErrorHandler.handleError(error);
    errorMessage && this.erros.addError(errorMessage);
  }

  clearErrors() {
    this.erros.clearErrors();
  }

  resetForm() {
    this.erros.clearErrors();
    this.form?.resetForm();
  }

  navigateTo(path: string) {
    this.resetForm();
    return this.navigator.navigateTo(path);
  }

  onSubmit(
    data: LoginFormInput,
    onSuccess: () => void,
    onError: (error: AuthError) => void
  ) {
    UsuarioService.signIn({ email: data.email, senha: data.senha })
      .then(onSuccess)
      .catch(onError);
  }
}
