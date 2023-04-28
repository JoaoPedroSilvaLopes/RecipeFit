import { ReceitaCategoria } from '@nx-workspace//shared/domain-types';
import { ReceitasService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

export const useLoad = () => {
  const [categorias, setCategorias] = useState<ReceitaCategoria[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>
    await ReceitasService.loadCategoria({ setData: setCategorias });

  return categorias;
};
