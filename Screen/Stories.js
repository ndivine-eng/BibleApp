import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Stories() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <View style={{ alignContent: "center", display:"flex", flexDirection:"row" }}>
        <Text style={{ fontSize: 38,fontStyle:'italic'  }}> Bible Audio stories</Text>
        <Text styles={{borderRadius: 10, padding:10,color: '#fff'}} >mode</Text>
      </View>

    </View>
  )
}
