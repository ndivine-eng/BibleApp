import React,{useEffect,useState,useContext} from "react";
import { View ,Text,Pressable, FlatList,Dimensions,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'



const width=Dimensions.get('screen').width
const height=Dimensions.get('screen').height

const Search=({})=>{

    return(
        <View style={{height:height,backgroundColor:'black'}}>
            <View style={{height:80}}></View>
             <TextInput
        textColor="white"
        placeholder="Search"
        // mode="offline"
        left={<TextInput.Icon icon={"magnify"} size={30} color={'black'}/>}
        right={<TextInput.Icon icon={"delete-circle"} size={30} color={'black'} />}
        // onChangeText={(setSearchdata)}
          style={{marginHorizontal:10}}/>
         <View style={{height:200}}></View>
         <View style={{marginLeft:150}}>
            <Entypo name="magnifying-glass" size={100} color={'grey'} style={{alignContent:'center'}}/>
            <Text style={{color:'grey',fontSize:23,marginLeft:10}}>Search</Text>
         </View>
        </View>
    )
}
export default Search;
