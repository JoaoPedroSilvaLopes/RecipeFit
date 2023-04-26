import { View } from 'react-native';
import { HeaderProps } from '../..';
import * as S from './header.styles';

const Header: React.FC<HeaderProps> = ({ title, actions }) => {
  return (
    <S.Container>
      <S.ActionGroup>
        {actions && (
          <>
            {actions.map((action, index) => (
              <View key={index}>{action}</View>
            ))}
          </>
        )}
      </S.ActionGroup>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
