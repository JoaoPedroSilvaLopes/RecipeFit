import * as yup from 'yup';

export const receitaValidationSchema = yup.object({
  nome: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  ingredientes: yup
    .string()
    .required('O campo é obrigatório')
    .max(300, 'O campo atingiu o limite máximo de 300 caracteres'),
  modoDePreparo: yup
    .string()
    .required('O campo é obrigatório')
    .max(300, 'O campo atingiu o limite máximo de 300 caracteres'),
  categoriaId: yup.string().required('O campo é obrigatório'),
});
