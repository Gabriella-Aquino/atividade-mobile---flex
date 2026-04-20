import FlexContainer from "@/components/flex/flex-container";
import FlexItem from "@/components/flex/flex-item";
import CustomButton from "@/components/customButton";
import React from "react";
import { StyleSheet, View } from "react-native";

const Q1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <CustomButton text={"Home"} />
        <CustomButton text={"Perfil"} />
      </View>

      <FlexContainer>
        <FlexItem style={styles.defaultAspectRatio} />
      </FlexContainer>

      <FlexContainer>
        <>
          <FlexItem style={styles.defaultAspectRatio} />
          <FlexItem style={styles.defaultAspectRatio} />
        </>
      </FlexContainer>

      <FlexContainer>
        <FlexItem style={{ aspectRatio: 16 / 4 }} />
      </FlexContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingTop: 20,
    gap: 15,
  },
  defaultAspectRatio: {
    aspectRatio: 16 / 9,
  },
});

export default Q1;
