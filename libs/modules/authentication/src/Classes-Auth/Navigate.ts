import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export class Navigate {
  private navigator = useNavigation<NativeStackNavigationProp<any>>();

  navigateTo(path: string) {
    return this.navigator.navigate(path)
  }
}
