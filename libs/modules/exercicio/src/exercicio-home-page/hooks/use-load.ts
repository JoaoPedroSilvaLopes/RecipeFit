import { ExercicioCategoria } from '@nx-workspace//shared/domain-types';
import { ExerciciosService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

export const useLoad = () => {
  const [categorias, setCategorias] = useState<ExercicioCategoria[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>
    await ExerciciosService.loadCategoria({ setData: setCategorias });

  return categorias;
};
