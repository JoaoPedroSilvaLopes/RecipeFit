import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    textAlign: 'center',
  },
  title: {
    color: '#80C8FF',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Gothic A1',
    position: 'absolute',
  },
  actionGroup: {
    marginRight: 'auto',
    gap: 8,
    flexDirection: 'row',
  },
});
