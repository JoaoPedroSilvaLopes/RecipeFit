import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 40,
    height: 100,
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
    transform: [{translateX: width * -0.25}],
  },
  actionGroup: {
    marginRight: 'auto',
    gap: 8,
    flexDirection: 'row',
  },
});
