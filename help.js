import react, { useState, useContext } from "react";
import { ImageBackground, SafeAreaView, View, Text, Pressable, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Help=({})=>{
return (
    <View style={{ backgroundColor: 'black', height: height }}>
       <View style={{ height: 30 }}></View>
       <View style={{ flexDirection: 'row', gap: 5, paddingTop: 30, paddingBottom: 14 }}>
          <Pressable onPress={() => navigation.navigate('')}>
             <View><Icon name='arrow-left' size={22} style={{ color: 'white', marginHorizontal: 20 }} /></View>
          </Pressable>
          <View><Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Help</Text></View>
       </View>
       <View style={{height:40}}></View>
       <Text style={{fontWeight:'bold',color:'white',fontSize:26,marginHorizontal:23}}>Product Support</Text>
       <View style={{height:27}}></View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'white',fontSize:20,marginHorizontal:22}}>Visit Support Website</Text>
       <View><Icon name='arrow-right' size={22} style={{ marginHorizontal:10,color: 'white', marginHorizontal: 20 }} /></View>
       </View>
       <View style={{height:27}}></View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'white',fontSize:20,marginHorizontal:22}}>Get help</Text>
       <View><Icon name='arrow-right' size={22} style={{ marginHorizontal:10,color: 'white', marginHorizontal: 20 }} /></View>
       </View>
       <View style={{height:27}}></View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'white',fontSize:20,marginHorizontal:22}}>Feedback</Text>
       <View><Icon name='arrow-right' size={22} style={{ marginHorizontal:10,color: 'white', marginHorizontal: 20 }} /></View>
       </View>
       <View style={{height:27}}></View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'white',fontSize:20,marginHorizontal:22}}>Suggestions and ideas</Text>
       <View><Icon name='arrow-right' size={22} style={{ marginHorizontal:10,color: 'white', marginHorizontal: 20 }} /></View>
       </View>
       </View>
);
       }
       export default Help;