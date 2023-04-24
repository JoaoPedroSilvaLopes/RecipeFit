import { FlatCardProps } from '../../types';
import * as S from './flat-card.styles';

const FlatCard: React.FC<FlatCardProps> = ({ title, actions }) => {
  return (
    <S.Card shadow={3}>
      <S.Title>{title}</S.Title>
      <S.Actions>{actions}</S.Actions>
    </S.Card>
  );
};

export default FlatCard;
