import * as yup from 'yup';

export const perfilValidationSchema = yup.object({
  nome: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  email: yup
    .string()
    .required('O campo é obrigatório')
    .email('Insira um email válido')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  peso: yup
    .number()
    .min(25, 'O peso deve ser maior ou igual a 25 kg')
    .max(635, 'O peso deve ser menor ou igual a 635 kg')
    .typeError('Insira um número'),
  altura: yup
    .number()
    .min(64, 'A altura deve ser maior ou igual a 64 cm')
    .max(274, 'A altura deve ser menor ou igual a 274 cm')
    .typeError('Insira um número'),
});
