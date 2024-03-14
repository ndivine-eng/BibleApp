import BottombarNav from './Screen/BottombarNav';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Screen/Profile';
import About from './Screen/About';
import Settings from './Screen/Settings';
import React from "react";
import Login from "./Screen/Login";
import ThemeProvider from "./Context/Themeprovider";
import Todayscreen from "./Screen/Todayscreen";
import Stories from "./Screen/Stories";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import Todayscreen from './Screen/Todayscreen';

import { GestureHandlerRootView} from 'react-native-gesture-handler';
import Highlights from './Screen/Highlight';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createNativeStackNavigator();
const TabBar = createMaterialTopTabNavigator();

function TopNav() {
  return (
    <TabBar.Navigator>
      <TabBar.Screen name="Profile" component={Highlights} />
      <TabBar.Screen name="About" component={About} />
    </TabBar.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='bottomVav' >
        <Stack.Screen name='bottomVav' component={BottombarNav} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Todayscreen" component={Todayscreen}/>
        <Stack.Screen name="Stories" component={Stories}/>
        <Stack.Screen name="Today" component={Today}/>
        <Stack.Screen name="TopNav" component={TopNav} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
   
  );
}
