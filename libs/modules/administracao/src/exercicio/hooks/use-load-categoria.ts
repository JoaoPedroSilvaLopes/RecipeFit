import { ExercicioCategoria } from '@nx-workspace//shared/domain-types';
import { ExerciciosCategoriasService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

export const useLoadCategoria = () => {
  const [categorias, setCategorias] = useState<ExercicioCategoria[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>
    await ExerciciosCategoriasService.load({ setData: setCategorias });

  return categorias;
};
