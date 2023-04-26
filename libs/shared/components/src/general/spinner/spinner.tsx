import { SpinnerProps } from '../../types';
import * as S from './spinner.styles';

export const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  return <S.Spinner size={size} />;
};

export default Spinner;
