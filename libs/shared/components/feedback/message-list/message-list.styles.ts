import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  messagePanel: {
    padding: 15,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    shadowColor: '#000',
    elevation: 5,
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listText: {
    width: '85%',
    textAlign: 'justify',
    fontFamily: 'Gothic A1',
    fontSize: 12,
  },
  positiveVariant: {
    backgroundColor: '#B9E4CA',
    color: '#0C622E',
  },
  dangerVariant: {
    backgroundColor: '#f5c9d1',
    color: '#842e3c',
  },
  onCloseButton: {
    width: 25,
    height: 25,
    marginRight: 5,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
