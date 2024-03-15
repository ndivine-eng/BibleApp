import { StyleSheet, Text, View , TouchableOpacity, ScrollView, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo ,MaterialIcons,AntDesign, Feather} from 'react-native-vector-icons'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'

export default function Bible() {


  const [bibleVerse, setBibleVerse] = useState([]);

  // const handleFetch = ()=>{
  //   axios({
  //     method:get,
  //     URL:'https://api.scripture.api.bible/?api-key=0d6e81c842b445794fe47decbb0d8524​/v1​/audio-bibles',

  //   }).then((Response)=>{
  //     console.log(Response.data);
  //     setBibleVerse(Response.data);
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // }

  // useEffect(() => {
  //   handleFetch();
  // }, []);

  
  
  useEffect(()=>{
    const fetchBibleVerse = async () => {
      try {
        console.log("hello")
        const response = await axios.get('https://bolls.life/get-chapter/NKJV/22/8/')
        setBibleVerse(response.data);
        console.log(response.data[0].name)
      } catch (error) {
        console.log('Error fetching Bible verse:', error);
      }
    };
    fetchBibleVerse();
  },[])
  return (
    <ScrollView>
      <View style={{flexDirection:'row', justifyContent:'flex-end', gap:30}}>

        <TouchableOpacity>
        <AntDesign name="sound" size={20} color={'black'} style={{marginTop:4}}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <AntDesign name="search1" size={20} color={'black'} style={{marginTop:4}}/>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row', backgroundColor:'grey', padding:7, borderRadius:17, width:'18%', }} >
          <Feather name="globe" size={15} color={'black'} style={{marginTop:4}}/>
          <Text style={{fontSize:15, marginLeft:7}}>NIV</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>{bibleVerse.map((items,index)=>{
        <View>
          <Text>{items.name}</Text>
           <Text>{items.chapters}</Text>
        </View>
      })}</Text> */}
      <View>
        <FlatList 
        data={bibleVerse}
        // keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
          <View>
            <Text>{item.verse}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
        />
      </View>
      <View style={{height:620, }}></View>
      <View style={{marginBottom:10}}>
        <Entypo name="controller-play" size={20} color={'black'} style={{marginTop:4, marginLeft:380, backgroundColor:'white', borderRadius:100, padding:7, width:'10%'}}/>
      </View>
      {/* <Text>Bible</Text> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})