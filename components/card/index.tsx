import React from "react";
import { StyleSheet, View } from "react-native";
import FlexContainer from "../flex/flex-container";
import FlexItem from "../flex/flex-item";

const Card = () => {
  return (
    <FlexContainer>
      <View style={styles.container}>
        <View style={styles.perfilContainer}>
          <FlexItem style={styles.perfilAvatar} />
          <View style={{ flex: 1, gap: 7 }}>
            <FlexItem style={styles.perfilInformation} />
            <FlexItem
              style={[
                styles.perfilInformation,
                { width: "30%", backgroundColor: "#535b83" },
              ]}
            />
          </View>
        </View>
        <FlexItem style={styles.content} />
      </View>
    </FlexContainer>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  perfilAvatar: {
    borderRadius: 50,
    aspectRatio: 1,
    width: 50,
    flex: 0,
  },
  perfilContainer: {
    flexDirection: "row",
    gap: 15,
    width: "100%",
    alignItems: "center",
  },
  perfilInformation: {
    height: 12,
    flex: 0,
    width: "40%",
    borderRadius: 5,
  },
  content: {
    flex: 0,
    width: "100%",
    aspectRatio: 16 / 4,
  },
});
