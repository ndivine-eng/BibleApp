import { View, Text, Image } from 'react-native'
import React from 'react'

const Imagecomp = ( {image, text}) => {
  return (
    <View>
      <Image  source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}  style={{width: 250, height: 250, marginHorizontal: 10, borderRadius: 10}}/>
      <Text style={{position: 'absolute', backgroundColor:'#f1b91c', color: 'black', right: 10, bottom: 10, width: 30, textAlign: 'center', padding: 0}}>{text}</Text>
    </View>
  )
}

export default Imagecomp