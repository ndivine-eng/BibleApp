import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bible from './Bible';
import Profile from './Profile';
import Stories from './Stories';
import Todayscreen from './Todayscreen';
import { Ionicons,MaterialIcons,AntDesign} from 'react-native-vector-icons'
import DrawerNavigator from '../navigation/drawer';

const Tab = createBottomTabNavigator();


export default function BottombarNav() {
  return (
    
    <Tab.Navigator>
      <Tab.Screen
        name="Todayscreen"
        component={Todayscreen}
        options={{
          tabBarLabel: 'Today',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="moon-outline" size={20} color={color} /> 
          ),

          tabBarActiveTintColor:"orange"
        }}
      />
      <Tab.Screen
        name="Bible"
        component={Bible}
        options={{
          tabBarLabel: 'Bible',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={20} color={color} /> 
          ),

          tabBarActiveTintColor:"orange"
        }}
      />
      <Tab.Screen
        name="Stories"
        component={Stories}
        options={{
          tabBarLabel: 'Stories',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="sound" size={20} color={color} /> 

          ),

          tabBarActiveTintColor:"orange"
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DrawerNavigator }
        options={{
          tabBarLabel: 'profile',
          // headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person-outline" size={20} color={color} /> 
          ),
          tabBarActiveTintColor:"orange"
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})