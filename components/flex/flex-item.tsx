import { StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'
interface FlexItemProps {
  style?: ViewStyle | ViewStyle[]
}

const FlexItem = ({ style }: FlexItemProps) => {
  return (
    <View
      style={[
        styles.flexItem,
        style,
      ]}
    />
  )
}

const styles = StyleSheet.create({
  flexItem: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#2b2e3b",
  },
})

export default FlexItem
