import * as React from "react";
 import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer,DrawerActions,useNavigation} from '@react-navigation/native';
import Settings from "../Screen/Settings";
import Help from "../help";
import About from "../Screen/About";
import Login from "../Screen/Login";
import Profile from "../Screen/Profile";


const Drawer = createDrawerNavigator();
export default function DrawerNavigator () {

    return (
        // <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Help" component={Help}  />
          <Drawer.Screen name="About" component={About}  />
          <Drawer.Screen name="SignIn" component={Login} />
        </Drawer.Navigator>
        // </NavigationContainer>
    );
  }