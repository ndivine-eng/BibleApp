import React from "react";
 import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer,DrawerActions,useNavigation} from '@react-navigation/native';
import Settings from "../Screen/Settings";
import Help from "../help";
import About from "../Screen/About";
import Login from "../Screen/Login";


const Drawer = createDrawerNavigator();
export default function DrawerNavigator () {

    return (
        // <NavigationContainer>
        <Drawer.Navigator initialRouteName="Profile">
          <Drawer.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
          <Drawer.Screen name="Help" component={Help}  options={{headerShown:false}}/>
          <Drawer.Screen name="About" component={About}  options={{headerShown:false}}/>
          <Drawer.Screen name="SignIn" component={Login}  options={{headerShown:false}}/>
        </Drawer.Navigator>
        // </NavigationContainer>
    );
  }