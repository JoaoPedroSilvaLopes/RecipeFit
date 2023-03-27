import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'Gothic A1',
    fontSize: 45,
    fontWeight: 'bold',
    color: '#80C8FF',
    width: '100%',
    paddingHorizontal: 50,
  },
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#555555',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textFieldGroup: {
    alignItems: 'center',
    gap: 15,
    width: '100%',
  },
  footerContainer: {
    width: '100%',
    paddingHorizontal: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 45,
  },
  footerButtonGroup: {
    textAlign: 'center',
    flexDirection: 'row',
    gap: 30,
  },
  footerText: {
    fontFamily: 'Gothic A1',
    fontSize: 15,
    color: '#80C8FF',
  },
  fontWeight: {
    fontWeight: 'bold',
  },
});
