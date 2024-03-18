import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo, MaterialIcons, AntDesign, Feather } from 'react-native-vector-icons';
import axios from 'axios';

export default function Bible() {
  const [bibleVerse, setBibleVerse] = useState([]);

  useEffect(() => {
    const fetchBibleVerse = async () => {
      try {
        const response = await axios.get('https://bolls.life/get-chapter/NKJV/1/8/');
        setBibleVerse(response.data);
      } catch (error) {
        console.log('Error fetching Bible verse:', error);
      }
    };
    fetchBibleVerse();
  }, []);

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 30 }}>
        <TouchableOpacity>
          <AntDesign name="sound" size={20} color={'black'} style={{ marginTop: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="search1" size={20} color={'black'} style={{ marginTop: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'grey', padding: 7, borderRadius: 17, width: '18%' }}>
          <Feather name="globe" size={15} color={'black'} style={{ marginTop: 4 }} />
          <Text style={{ fontSize: 15, marginLeft: 7 }}>NIV</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={bibleVerse}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.verse}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={{ height: 620 }}></View>
      <View style={{ marginBottom: 10 }}>
        <Entypo name="controller-play" size={20} color={'black'} style={{ marginTop: 4, marginLeft: 380, backgroundColor: 'white', borderRadius: 100, padding: 7, width: '10%' }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
