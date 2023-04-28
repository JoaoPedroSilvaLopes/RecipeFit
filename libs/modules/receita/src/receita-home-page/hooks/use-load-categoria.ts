import { Receita } from '@nx-workspace//shared/domain-types';
import { ReceitasService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

type Props = {
  id?: string;
};

export const useLoadByCategoria = ({ id }: Props) => {
  const [data, setData] = useState<Receita[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    setIsloading(true);
    return (
      id &&
      (await ReceitasService.loadByCategoria({
        id,
        setData,
      }))
    );
  };

  return { data, isLoading };
};
