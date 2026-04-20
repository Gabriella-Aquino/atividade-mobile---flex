import CardContainer from "@/components/card/card-container";
import CardContent from "@/components/card/card-content";
import React from "react";
import { StyleSheet, View } from "react-native";

const Q2 = () => {
  return (
    <View style={styles.container}>
      <CardContainer style={{ gap: "30%" }}>
        <>
          <CardContent style={styles.circle} />
          <CardContent style={styles.circle} />
          <CardContent style={styles.circle} />
        </>
      </CardContainer>
      <CardContainer style={{justifyContent: "space-around"}}>
        <>
          <CardContent style={styles.square}/>
          <CardContent style={styles.square}/>
          <CardContent style={styles.square}/>
        </>
      </CardContainer>
      <CardContainer style={{paddingTop: 100}}>
        <>
          <CardContent style={styles.rectangle} />
          <CardContent style={styles.rectangle} />
          <CardContent style={styles.rectangle} />
          <CardContent style={styles.rectangle} />
        </>
      </CardContainer>
      <CardContainer style={{justifyContent: "center"}}>
        <>
          <CardContent style={styles.square}/>
          <CardContent style={styles.square}/>
        </>
      </CardContainer>
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
