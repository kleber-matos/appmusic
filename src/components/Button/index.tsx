import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...res }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.button} {...res}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 35,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    justifyContent: "center",
  },

  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000000",
    textAlign: "center",
  },
});
