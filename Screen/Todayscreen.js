

import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ChangeDarkMode } from '../Context/Themeprovider';
import axios from 'axios';
import StoryCards from '../components/StoryCards';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';


export default function Todayscreen() {
  const [verse, setVerse] = useState(null);
  const { darkMode, HandleMode } = useContext(ChangeDarkMode);

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await axios.get('https://bolls.life/get-random-verse/YLT/');
        setVerse(response.data);
        console.log(response.data[0])
      
      } catch (error) {
        console.log('Error fetching Bible verse:', error);
        // Display error message to user or handle it accordingly
      }
    };
    fetchVerse();
  }, []);

  return (
    <View style={{ backgroundColor: darkMode ? '#0d2e59' : '#fff', height: '100%', width: '100%', justifyContent: 'center' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Entypo name='flash' size={30} style={{ color: darkMode ? "white" : "black" }} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Today</Text>
        <FontAwesome5 name='share-alt' size={30} color={'#f6bd60'} />
      </View>
      <TouchableOpacity
        style={{ borderRadius: 10, justifyContent: 'center', padding: 10, marginTop: 20, marginLeft: 20, width: 100, gap: 10, backgroundColor: darkMode ? '#070707' : 'gray' }}
        onPress={HandleMode}>
        <Text style={{ color: '#fff', alignSelf: 'center', marginLeft: 20 }}>Change mode</Text>
      </TouchableOpacity>

      <View style={{ justifyContent: 'center', backgroundColor: darkMode ? '#0d2e59' : '#fff' }}>
        {verse && (
          <>
            <Text style={{ backgroundColor: darkMode ? '#0d2e59' : '#fff', marginLeft: 20 }}>{verse.reference}</Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 8, alignSelf: 'center', backgroundColor: darkMode ? '#0d2e59' : '#fff' }}>{verse.text}</Text>
          </>
        )}
        {!verse && (
          <Text style={{ backgroundColor: darkMode ? '#0d2e59' : '#fff', marginLeft: 20 }}>Loading...</Text>
        )}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <StoryCards comment='Pray' title="Today's prayer" />
        <StoryCards title="Memorize today's verse" comment='Start' />
        <StoryCards title="Share God's word" comment='Share' />
      </ScrollView>
    </View>
  )
}
