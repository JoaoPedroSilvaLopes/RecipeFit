import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    padding: '15%',
    backgroundColor: '#555555',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    gap: 10,
  },
  title: {
    fontFamily: 'Gothic A1',
    fontSize: 45,
    fontWeight: 'bold',
    color: '#80C8FF',
    width: '100%',
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
    gap: 10,
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
