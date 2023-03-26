import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { CircularButtonProps } from '../../types'

const CircularButton: React.FC<CircularButtonProps> = ({ 
  title, 
  rightImageUrl, 
  leftImageUrl, 
  backgroundImageUrl, 
  ...rest 
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.circularButton]}
        {...rest}
      >
        {backgroundImageUrl && <ImageBackground 
          style={styles.imageBackground}
          resizeMode='cover'
          source={backgroundImageUrl}
        />}
        {rightImageUrl && <Image
          style={styles.rightImage}
          source={rightImageUrl}
        />}
        {leftImageUrl && 
        <Image
          style={styles.leftImage}
          source={leftImageUrl}
        />}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularButton: {
    width: 200,
    height: 200,
    backgroundColor: '#EDEDED',
    borderWidth: 12,
    borderRadius: 150,
    borderColor: '#fff',
    alignItems: 'flex-end',
    marginBottom: 10,

    justifyContent: 'center',
    gap: -80,
    elevation: 8,
  },
  title: {
    color: '#005D8C',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Gothic A1',
  },
  imageBackground: {
    zIndex: -1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  rightImage: {
    width: 126,
    height: 126,
    marginVertical: -25,
    transform: [{
      rotate: '350deg',
    }],
    position: 'absolute',
    top: 100,
    right: -50,
  },
  leftImage: {
    width: 126,
    height: 126,
    marginVertical: -25,
    transform: [{
      rotate: '10deg'
    }],
    position: 'absolute',
    top: 100,
    right: 90,
  },
})

export default CircularButton
