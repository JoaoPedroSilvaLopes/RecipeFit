import * as yup from 'yup';

export const exercicioValidationSchema = yup.object({
  nome: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  categoriaId: yup
    .string()
    .required('O campo é obrigatório'),
});
