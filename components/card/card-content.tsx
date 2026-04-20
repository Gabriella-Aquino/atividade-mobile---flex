import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

interface CardContentProps{
  style?: ViewStyle
}

const CardContent = ({style}:CardContentProps) => {
  return (
    <View style={[styles.cardContent, style]}>
    </View>
  )
}


const styles = StyleSheet.create({
  cardContent: {
    backgroundColor: "#2b2e3b",
    flex: 1,
    aspectRatio: 16 / 9,
    borderRadius: 15,
  },
})

export default CardContent