import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Profile() {
  return (
    <View>
        <StatusBar/>
      <Text> My Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({})