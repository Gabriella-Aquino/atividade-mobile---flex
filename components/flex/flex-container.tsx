import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface FlexContainerProps {
  style?: ViewStyle;
  children: React.ReactElement;
}

const FlexContainer = ({ children, style }: FlexContainerProps) => {
  return <View style={[styles.flexContainer, style]}>{children}</View>;
};

export default FlexContainer;

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#535b83",
    borderRadius: 15,
    padding: 20,
    gap: 15,
  },
});
