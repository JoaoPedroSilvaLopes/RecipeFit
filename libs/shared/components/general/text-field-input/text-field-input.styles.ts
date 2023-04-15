import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  titleLabelGroup: {
    flexDirection: 'row',
    gap: 5,
  },
  label: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 5,
  },
  isRequired: {
    color: '#FF6C6C',
    fontFamily: 'Gothic A1',
    fontSize: 15,
  },
  error: {
    marginTop: 5,
    color: '#FF6C6C',
    fontFamily: 'Gothic A1',
    fontSize: 12,
    width: '100%',
  },
  inputPressed: {
    borderColor: '#80C8FF',
  },
  inputError: {
    borderColor: '#FF6C6C',
  },
  baseInput: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#555555',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,

    fontFamily: 'Gothic A1',
    fontSize: 15,
    color: '#ffffff',

    shadowColor: '#000',
    elevation: 5,
  },
});
