import {CircularButtonProps} from '@recipefit/components';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import * as S from './circular-button.styles';

const CircularButton: React.FC<CircularButtonProps> = ({
  title,
  rightImageUrl,
  leftImageUrl,
  backgroundImageUrl,
  ...rest
}) => {
  return (
    <View style={S.styles.container}>
      <TouchableOpacity style={[S.styles.circularButton]} {...rest}>
        {backgroundImageUrl && (
          <ImageBackground
            style={S.styles.imageBackground}
            resizeMode="cover"
            source={backgroundImageUrl}
          />
        )}
        {rightImageUrl && (
          <Image style={S.styles.rightImage} source={rightImageUrl} />
        )}
        {leftImageUrl && (
          <Image style={S.styles.leftImage} source={leftImageUrl} />
        )}
      </TouchableOpacity>
      <Text style={S.styles.title}>{title}</Text>
    </View>
  );
};

export default CircularButton;
