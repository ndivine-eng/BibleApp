import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'; 
import { EvilIcons ,MaterialIcons,AntDesign} from 'react-native-vector-icons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Profile() {
  const navigation = useNavigation(); 

  return (
    <View>
      <View style={{height:50}}></View>
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal:10}}>
        <EvilIcons name="navicon" size={25} color={'black'}/>
        <Text style={{fontSize: 20}}> My Profile</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
          <Text style={{fontSize: 15, color: 'orange'}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', gap:10, marginTop:20, border:'2 solid', borderColor:'black', marginHorizontal:12}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Highlights')}>
          <Text style={{borderRadius:20,borderColor:"orange", borderWidth:2, color:'orange', padding:7}}> Highlights</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{borderRadius:20,borderColor:"black", borderWidth:1, padding:7}}> Bible Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({});
