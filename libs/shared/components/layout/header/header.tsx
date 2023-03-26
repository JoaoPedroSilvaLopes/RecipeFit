import { HeaderProps } from '@recipefit/components';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Header: React.FC<HeaderProps> = ({ 
  title, 
  actions, 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionGroup}>
        {actions && (
          <>
            {actions.map((action) => (
              action
            ))}
          </>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 40,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  title: {
    color: '#005D8C',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Gothic A1',
    transform: [{translateX: width * -0.31}]
  },
  actionGroup: {
    marginRight: 'auto',
    gap: 8,
    flexDirection: 'row',
  }
})


export default Header
