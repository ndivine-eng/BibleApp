import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Highlights(navigation) {
  return (
    <View style={{  justifyContent: 'center',}}>
    <View style={{ alignItems:'center'}}>
      <Text>MAKE THE BIBLE YOURS</Text>
      <Text>Tab on a verse in the Bible to highlight.</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({})