import React, { useContext } from 'react';
import { View, Text, TouchableOpacity,ScrollView  } from 'react-native';
import { ChangeDarkMode } from '../Context/Themeprovider';
import StoryCards from '../Components/StoryCards';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';


export default function Todayscreen() {
  const { darkMode, HandleMode } = useContext(ChangeDarkMode);
  return (

    <View style={{backgroundColor: darkMode ? '#0d2e59' : '#fff',height:'100%',width:'100%',justifyContent:'center'}}>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%' }}>
        <Entypo name='flash' size={30}  style={{color: darkMode?"white": "black"}}/>
        <Text>Today</Text>
        <FontAwesome5 name='share-alt' size={30} color={'#f6bd60'}/>
      </View>
       <TouchableOpacity 
                style={ { borderRadius: 10,justifyContent:'center', padding: 10,marginTop: 20,marginLeft:20, width:100, gap:10, backgroundColor: darkMode ? '#070707' : 'gray' }} 

                onPress={HandleMode}
            >
                <Text style={{color: '#fff',alignSelf:'center',marginLeft:20, }}>Change mode</Text>
            </TouchableOpacity>

      <View style={{justifyContent:'center',backgroundColor: darkMode ? '#0d2e59' : '#fff'}}>
        <Text style={{backgroundColor: darkMode ? '#0d2e59' : '#fff',marginLeft:20, }}>Mathew 6:3</Text>
        <Text style={{fontSize:25, fontWeight:'bold',margin:8, alignSelf:'center',backgroundColor: darkMode ? '#0d2e59' : '#fff'}}>But when you give to the needy, do not let your left hand know what your right hand is doing</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <StoryCards comment='Pray' tittle="Today's prayer"/>
        <StoryCards tittle="Memorize today's verse" comment='Start'/>
        <StoryCards tittle="Share God's word" comment='Share'/>
      </ScrollView>

      
    </View>
  )
}