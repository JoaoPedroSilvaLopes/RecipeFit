import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularButton: {
    width: 200,
    height: 200,
    backgroundColor: '#555555',
    borderWidth: 12,
    borderRadius: 150,
    borderColor: '#333333',
    alignItems: 'flex-end',
    marginBottom: 10,

    justifyContent: 'center',
    gap: -80,
    elevation: 8,
  },
  title: {
    color: '#80C8FF',
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
    transform: [
      {
        rotate: '350deg',
      },
    ],
    position: 'absolute',
    top: 100,
    right: -50,
  },
  leftImage: {
    width: 126,
    height: 126,
    marginVertical: -25,
    transform: [
      {
        rotate: '10deg',
      },
    ],
    position: 'absolute',
    top: 100,
    right: 90,
  },
});
