import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface CardContainerProps {
  style?: ViewStyle;
  children: React.ReactElement;
}

const CardContainer = ({ children, style }: CardContainerProps) => {
  return (
    <View style={[styles.cardContainer, style]}>
      {children}
    </View>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#535b83",
    borderRadius: 15,
    padding: 20,
    gap: 15
  },
});
