import { StyleSheet, Text, View , TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { Entypo ,MaterialIcons,AntDesign, Feather} from 'react-native-vector-icons'
// import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Bible() {
  return (
    <ScrollView>
      <View style={{flexDirection:'row', justifyContent:'flex-end', gap:30}}>

        <TouchableOpacity>
        <AntDesign name="sound" size={20} color={'black'} style={{marginTop:4}}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <AntDesign name="search1" size={20} color={'black'} style={{marginTop:4}}/>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row', backgroundColor:'grey', padding:7, borderRadius:17, width:'18%', }} >
          <Feather name="globe" size={15} color={'black'} style={{marginTop:4}}/>
          <Text style={{fontSize:15, marginLeft:7}}>NIV</Text>
        </TouchableOpacity>
      </View>
      <View style={{height:620, }}></View>
      <View style={{marginBottom:10}}>
        <Entypo name="controller-play" size={20} color={'black'} style={{marginTop:4, marginLeft:380, backgroundColor:'white', borderRadius:100, padding:7, width:'10%'}} />
      </View>
      {/* <Text>Bible</Text> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})