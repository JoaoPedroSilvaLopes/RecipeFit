import { CategoriaReceitaFieldNames } from "@nx-workspace//shared/domain-types";

export const getReceita = (
  categoria: CategoriaReceitaFieldNames
): string => {
  switch (categoria) {
    case CategoriaReceitaFieldNames.Salgados:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-receita%2FSalgados.jpg?alt=media&token=840fbd92-ded6-4f00-8d68-a3ce1c57dd25.jpg';
    case CategoriaReceitaFieldNames.Saladas:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-receita%2FSaladas.jpg?alt=media&token=870cbb68-8fb0-43fe-af4a-d57cf42832e4.jpg';
    case CategoriaReceitaFieldNames.Bebidas:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-receita%2FBebidas.jpg?alt=media&token=0dde453b-1776-4685-b6a7-3a9e8d024326.jpg';
    case CategoriaReceitaFieldNames.ComFrutas:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-receita%2FCom%20Frutas.jpg?alt=media&token=fb14aae4-d672-48ee-ba76-db4b3a40a92a.jpg';
    case CategoriaReceitaFieldNames.Doces:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-receita%2FDoces.jpg?alt=media&token=4c149b34-b0e8-4022-b4b3-a9a5be05f9b1.jpg';
    case CategoriaReceitaFieldNames.LowCarb:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-receita%2FLow%20Carb.jpg?alt=media&token=1a0f6b50-14bb-4d1d-889a-188913985252.jpg';
    default:
      return '';
  }
};
