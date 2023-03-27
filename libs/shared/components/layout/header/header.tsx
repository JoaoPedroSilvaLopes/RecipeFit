import {HeaderProps} from '@recipefit/components';
import {Text, View} from 'react-native';

import * as S from './header.styles';

const Header: React.FC<HeaderProps> = ({title, actions}) => {
  return (
    <View style={S.styles.container}>
      <View style={S.styles.actionGroup}>
        {actions && <>{actions.map(action => action)}</>}
      </View>
      <Text style={S.styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
