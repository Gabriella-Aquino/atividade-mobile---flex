import CardContainer from "@/components/card/card-container";
import CardContent from "@/components/card/card-content";
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

      <CardContainer>
        <CardContent />
      </CardContainer>

      <CardContainer>
        <>
          <CardContent />
          <CardContent />
        </>
      </CardContainer>

      <CardContainer>
        <CardContent style={{ aspectRatio: 16 / 4 }} />
      </CardContainer>
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
});

export default Q1;
