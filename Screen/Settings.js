import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , { useState} from 'react'
import { Entypo ,MaterialIcons,AntDesign} from 'react-native-vector-icons'


const Settings = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    const toggleNotifications = () => {
      setNotifications(!notifications);
    };

  return (
    <View style={{marginLeft:30}}>
        <View style={{height:80}}></View>
        <View style={{justifyContent:'space-around'}}>
            <Text style={{fontSize:20, color:'orange'}}>Theme</Text>
            <View style={{height:45}}></View>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginRight:20}}>
               <Text style={{fontSize:20}}>Match Device Settings</Text>
               <TouchableOpacity onPress={toggleDarkMode}>
               <Entypo  name={darkMode ? "circle-with-cross" : "circle"} size={25} color={darkMode ? 'black' : 'gray'}/>
               </TouchableOpacity>
            </View>
            <View style={{height:40}}></View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
               <Text style={{fontSize:20}}>Dark Mode</Text>
               <TouchableOpacity>
               <Entypo  name="circle" size={25} color={'black'}/>
               </TouchableOpacity>
            </View>
            <View style={{height:45}}></View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
               <Text style={{fontSize:20}}>Light Mode</Text>
               <TouchableOpacity>
               <Entypo  name="circle" size={25} color={'black'}/>
               </TouchableOpacity>
            </View>
            <View style={{height:45}}></View>
            <Text style={{fontSize:20, color:'orange'}}>Notifications</Text>
            <View style={{height:45}}></View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
                <Text style={{fontSize:20}}>Verse of the Day</Text>
                <TouchableOpacity onPress={toggleNotifications}>
                <Entypo name="switch" size={25} color={'black'}/>
                </TouchableOpacity>
            </View>
            <View style={{height:45}}></View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
                <Text style={{fontSize:20}}>Daily Player</Text>
                <TouchableOpacity onPress={toggleNotifications}>
                <Entypo name="switch" size={25} color={'black'}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})