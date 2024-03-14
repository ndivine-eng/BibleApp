
import BottombarNav from './Screen/BottombarNav';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Screen/Profile';
import About from './Screen/About';
import 'react-native-gesture-handler';
import Settings from './Screen/Settings';
import React from "react";
import { View, Text } from "react-native";
import Login from "./Screen/Login";
import ThemeProvider from "./Context/Themeprovider";
import Today from "./Screen/Today";
import Stories from "./Screen/Stories";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView} from 'react-native-gesture-handler'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='bottomVav' component={BottombarNav} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Today" component={Today}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
   
  );
}