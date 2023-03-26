import { IconButtonProps } from '@recipefit/components'
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

const IconButton: React.FC<IconButtonProps> = ({ 
  icon, ...rest 
}) => {
  return (
    <TouchableOpacity
      style={styles.iconButton}
      {...rest}
    >
      {icon}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconButton: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: '#005D8C',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default IconButton
