import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlexContainer from '@/components/flex/flex-container'
import FlexItem from '@/components/flex/flex-item'

const Q4 = () => {
  return (
    <View style={styles.container}>
      <FlexContainer>
        <FlexItem style={styles.line}/>
      </FlexContainer>

      <FlexContainer>
        <FlexItem style={{aspectRatio: 16 / 9}}/>
      </FlexContainer>

      <View style={{flexDirection: 'row', gap: 10}}>
        <FlexContainer style={{flex: 1}}>
          <FlexItem style={{aspectRatio: 16 / 9}}/>
        </FlexContainer>
        <FlexContainer style={{flex: 1}}>
          <FlexItem style={{aspectRatio: 16 / 9}}/>
        </FlexContainer>
      </View>

      <FlexContainer>
        <FlexItem style={styles.line}/>
      </FlexContainer>

    </View>
  )
}

export default Q4

const styles = StyleSheet.create({
  container:{
    gap: 20
  },
  line:{
    height: 20,
    borderRadius: 5,
  }
})