import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Entypo ,MaterialIcons,AntDesign} from 'react-native-vector-icons'
// import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Bible() {
  return (
    <View>
      <View>

        <TouchableOpacity>
        <AntDesign name="sound" size={20} color={'black'}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <AntDesign name="search1" size={25} color={'black'}/>
        </TouchableOpacity>

        <View>
          <AntDesign name="search1" size={25} color={'black'}/>
          <Text>NIV</Text>
        </View>
       
      </View>
      {/* <Text>Bible</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({})