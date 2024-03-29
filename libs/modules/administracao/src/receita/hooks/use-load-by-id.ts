import { Receita } from '@nx-workspace//shared/domain-types';
import { ReceitasService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

type Props = {
  id?: string;
};

export const useLoadById = ({ id }: Props) => {
  const [data, setData] = useState<Receita>();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    return await ReceitasService.loadById({ id: id, setData });
  };

  return { data };
};
