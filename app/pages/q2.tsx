import FlexContainer from "@/components/flex/flex-container";
import FlexItem from "@/components/flex/flex-item";
import React from "react";
import { StyleSheet, View } from "react-native";

const Q2 = () => {
  return (
    <View style={styles.container}>
      <FlexContainer style={{ gap: "30%" }}>
        <>
          <FlexItem style={styles.circle} />
          <FlexItem style={styles.circle} />
          <FlexItem style={styles.circle} />
        </>
      </FlexContainer>
      <FlexContainer style={{justifyContent: "space-around"}}>
        <>
          <FlexItem style={styles.square}/>
          <FlexItem style={styles.square}/>
          <FlexItem style={styles.square}/>
        </>
      </FlexContainer>
      <FlexContainer style={{paddingTop: 100}}>
        <>
          <FlexItem style={styles.rectangle} />
          <FlexItem style={styles.rectangle} />
          <FlexItem style={styles.rectangle} />
          <FlexItem style={styles.rectangle} />
        </>
      </FlexContainer>
      <FlexContainer style={{justifyContent: "center"}}>
        <>
          <FlexItem style={styles.square}/>
          <FlexItem style={styles.square}/>
        </>
      </FlexContainer>
    </View>
  );
};

export default Q2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 20
  },
  circle: {
    aspectRatio: 1,
    borderRadius: 50,
  },
  square: {
    aspectRatio: 1,
    width: "17%",
    flex: 0
  },
  rectangle:{
    aspectRatio: 4/3
  }
});
