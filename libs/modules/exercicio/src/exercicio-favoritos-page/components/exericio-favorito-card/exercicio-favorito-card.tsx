import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as S from './exercicio-favorito-card.styles';

type Props = {
  title: string;
  onPress?: () => void;
};

const ExercicioFavoritoCard: React.FC<Props> = ({ title, onPress }) => {
  return (
    <S.Card shadow={3}>
      <S.Title>{title}</S.Title>
      <S.HearthIcon
        icon={
          <Icon
            name="heart-remove"
            size={40}
            color={'#ff6c6c'}
            onPress={onPress}
          />
        }
        shadow={'none'}
      />
    </S.Card>
  );
};

export default ExercicioFavoritoCard;
