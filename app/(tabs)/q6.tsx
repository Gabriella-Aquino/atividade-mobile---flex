import FlexContainer from "@/components/flex/flex-container";
import FlexItem from "@/components/flex/flex-item";
import React from "react";
import { StyleSheet, View } from "react-native";

const Q6 = () => {
  return (
    <View style={styles.container}>
      <FlexContainer>
        <View style={styles.mainCard}>
          <FlexItem style={styles.perfilAvatar} />
          <FlexItem style={styles.perfilInformation} />
          <FlexItem
            style={[
              styles.perfilInformation,
              { width: "30%", backgroundColor: "#535b83" },
            ]}
          />
        </View>
      </FlexContainer>

      <FlexContainer style={{ justifyContent: "space-around" }}>
        <>
          <FlexItem style={styles.rectangle} />
          <FlexItem style={styles.rectangle} />
          <FlexItem style={styles.rectangle} />
        </>
      </FlexContainer>

      <FlexContainer style={{ justifyContent: "space-around" }}>
        <>
          <FlexItem style={{ flex: 1, height: 50 }} />
          <FlexItem style={{ flex: 1, height: 50 }} />
        </>
      </FlexContainer>

      <FlexContainer>
        <View style={{ flexDirection: "column", flex: 1, gap: 10}}>
          <FlexItem style={{ flex: 0, height: 18 }} />
          <FlexItem style={{ flex: 0, height: 18, backgroundColor: "#535b83" }} />
        </View>
      </FlexContainer>
    </View>
  );
};

export default Q6;

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  mainCard: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    flex: 1,
  },
  perfilAvatar: {
    borderRadius: 50,
    aspectRatio: 1,
    width: 100,
    flex: 0,
  },
  perfilInformation: {
    height: 12,
    flex: 0,
    width: "40%",
    borderRadius: 5,
  },
  rectangle: {
    aspectRatio: 4 / 3,
    width: "25%",
    flex: 0,
  },
});
