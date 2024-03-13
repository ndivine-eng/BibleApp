import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Highlights(navigation) {
  return (
    <View style={{flex: 1,   justifyContent: 'center',}}>
    <View style={{flex:1, alignItems:'center'}}>
      <Text>MAKE THE BIBLE YOURS</Text>
      <Text>Tab on a verse in the Bible to highlight.</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({})