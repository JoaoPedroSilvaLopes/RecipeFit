import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 45,
    backgroundColor: '#005D8C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    elevation: 8,
  },
  disabled: {
    opacity: 0.65,
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Gothic A1',
  },
  activeIndicator: {
    color: '#ffffff',
  },
});
