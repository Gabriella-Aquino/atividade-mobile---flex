import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface CustomButtonProps {
  text: String;
  style?: ViewStyle;
}

const CustomButton = ({ text, style }: CustomButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2b2e3b",
    padding: 8,
    borderRadius: 8,
  },
  textButton: {
    color: "white",
  },
});

export default CustomButton;
