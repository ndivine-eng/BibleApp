import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from 'react-native-vector-icons';

export default function Stories() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <View style={{ alignContent: "center", display:"flex", flexDirection:"row" }}>
        <Text style={{ fontSize: 38, fontStyle:'italic' }}> Bible Audio stories</Text>
        <Text style={{ borderRadius: 10, padding:10, color: '#fff' }}>mode</Text> 
      </View>
      <View style={{ display:'flex', flexDirection:'row', gap:30 }}>
        <Text style={{ fontSize:20, fontWeight:'bold' }}>New Testament</Text>
        <AntDesign name="arrowright" size={20} color={'black'} style={{ marginTop:4 }}/>
      </View>
    </View>
  );
}
