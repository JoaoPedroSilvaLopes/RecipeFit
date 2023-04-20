export type LoginFormInput = {
  email: string;
  senha: string;
};

export type CadastroFormInput = {
  nome: string;
  email: string;
  peso?: string;
  altura?: string;
  senha: string;
  confirmarSenha: string;
};

export type RecuperarSenhaFormInput = {
  email: string;
};
