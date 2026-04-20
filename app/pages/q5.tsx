import FlexContainer from "@/components/flex/flex-container";
import FlexItem from "@/components/flex/flex-item";
import React from "react";
import { StyleSheet, View } from "react-native";

const Q5 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.search} />
        <FlexItem style={{ width: 100, flex: 0, height: 40 }} />
      </View>
      <View style={styles.content}>
        {Array.from({ length: 6 }).map((_, index) => (
          <FlexContainer style={{ width: "47%" }}>
            <FlexItem style={{ aspectRatio: 16 / 9 }} />
          </FlexContainer>
        ))}
      </View>
    </View>
  );
};

export default Q5;

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  navContainer: {
    flexDirection: "row",
    gap: 10,
  },
  search: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#535b83",
    borderRadius: 50,
    height: 40,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 15,
  },
});
