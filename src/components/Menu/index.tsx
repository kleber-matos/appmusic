import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";

export function Menu() {
  return (
    <View style={styles.menu}>
      <Text style={styles.text}>MusicApp</Text>
      <Button title="Baixar agora" />
    </View>
  );
}
