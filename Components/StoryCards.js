<<<<<<< HEAD
import React from 'react';
import { View, Text } from 'react-native';

function StoryCards({ tittle, icon, comment }) {
  return (
    <View style={{ width: 300, height: 200, backgroundColor: '#344966', justifyContent: 'center', gap: 10, marginBottom: 10, borderRadius: 10, marginLeft: 20 }}>
      <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
        <Text>{icon}</Text>
        <Text>{tittle}</Text>
      </View>
      <View style={{ borderRadius: 10, justifyContent: 'center', padding: 10, borderColor: '#f6bd60', marginLeft: 20 }}>
        <Text style={{ color: '#f6bd60' }}>{comment}</Text>
      </View>
=======
import React from 'react'
import { View,Text, } from 'react-native';

function StoryCards({tittle,icon,comment}) {
  return (
    <View style={{width:300, height:200,backgroundColor:'#344966',  justifyContent:'center', gap:10, marginBottom:10, borderRadius:10, marginLeft:20,}}>
      <View style={{display:'flex', flexDirection:'row',marginLeft:20,}}>
        <Text>{icon}</Text>
        <Text>{tittle}</Text>
      </View>
      <View style={{borderRadius:10,justifyContent:'center',padding:'10',borderColor:'#f6bd60',marginLeft:20}}> 
        <Text style={{color:'#f6bd60'}}>{comment}</Text>
      </View>
      


      
>>>>>>> 301fd0a (Divine)
    </View>
  );
}

export default StoryCards;
