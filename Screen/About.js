import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function About() {
  return (
    <View style={{marginLeft:30}}>
        <View style={{height:80}}></View>
        <Text style={{borderRadius:20,borderColor:"orange", borderWidth:2, padding:7, width:'30%', textAlign:'center'}}>Rate This App</Text>
        <View style={{height:20}}/>
        <View style={{borderBottomColor:'black', borderBottomWidth:1, marginVertical:10, marginRight:20}}></View>
        <View style={{}}>
          <Text style={{fontSize:25, color:'orange', marginLeft:20}}>YourVersion</Text>
          <Text style={{marginRight:15, fontSize:15, marginTop:20, marginHorizontal:10}}>Study the Bible without distractions for free with no ads or purchases. Read the free, offline Bible. Listen to Scricture withthe Audio Bible. Customise your Bible with Highlights. Share verses with friends and family. Adjust Bible font text size. Focus on God's Word daily with the Verse of the Day and a daily prayer.</Text>

        </View>
        {/* <View style={{hieght:30}}></View> */}
          <View style={{marginTop:400, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:'orange'}}> Privacy Policy</Text>
            <Text>1.11.0-r2(1898)</Text>
          </View>


    </View>
  )
}

const styles = StyleSheet.create({})