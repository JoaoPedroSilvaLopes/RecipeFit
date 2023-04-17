export type LoginFormInput = {
  email: string;
  senha: string;
};

export type CadastroFormInput = {
  nome: string;
  email: string;
  dataNascimento: string;
  senha: string;
  confirmarSenha: string;
};

export type RecuperarSenhaFormInput = {
  email: string;
};
