import { Usuario } from '@nx-workspace//shared/domain-types';
import { UsuarioService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

type Props = {
  id?: string;
};

export const useLoadById = ({ id }: Props) => {
  const [data, setData] = useState<Usuario>();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    return await UsuarioService.loadById({ id: id, setData });
  };

  return { data };
};
