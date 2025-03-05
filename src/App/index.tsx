import { Text, View } from "react-native";
import { styles } from "./styles";
import { Menu } from "../components/Menu";

export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
    </View>
  );
}
