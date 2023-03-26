import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  CircularButton,
  Header,
  HeaderProps,
  IconButton
} from '@recipefit/components';
import {
  AlimentosImage,
  Diet,
  ExerciciosImage,
  Halteres,
  Vegetable
} from '@recipefit/assets';
import Icon from 'react-native-vector-icons/FontAwesome'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleNavigation = () => {
    navigation.navigate('Dashboard');
  };

  const headerConfigs: HeaderProps = {
    actions: [
      <IconButton
        icon={<Icon
          name='gear'
          size={25}
          color={'#fff'}
        />}
      />
    ]
  }

  return (
    <View style={styles.screen}>
      <Header {...headerConfigs} />
      <CircularButton
        title='Alimentação'
        rightImageUrl={Diet}
        leftImageUrl={Vegetable}
        backgroundImageUrl={AlimentosImage}
        onPress={() => handleNavigation()}
      />
      <CircularButton
        title='Exercícios'
        rightImageUrl={Halteres}
        backgroundImageUrl={ExerciciosImage}
        onPress={() => handleNavigation()}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    gap: 40,
  },
});

export default HomePage;
