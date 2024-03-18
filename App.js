
import BottombarNav from './Screen/BottombarNav';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Screen/Profile';
import About from './Screen/About';
import 'react-native-gesture-handler';
import Settings from './Screen/Settings';
import React from "react";
import { View, Text } from "react-native";
import ThemeProvider from "./Context/Themeprovider";
import Todayscreen from "./Screen/Todayscreen";
import Stories from "./Screen/Stories";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import Login from './Screen/Login';
import Signin from './signin';
import Register from './register';
import Help from './help';
import ForgotPasswordScreen from './forgotpassword';
import Search from './search';
import Bible from './Screen/Bible';





const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='bottomVav  ' >
    
        <Stack.Screen name='bottomVav' component={BottombarNav} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Todayscreen" component={Todayscreen}/>
        <Stack.Screen name="Stories" component={Stories}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name='Signin' component={Signin}/>
        <Stack.Screen name='Help' component={Help}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='Bible' component={Bible}/>
        <Stack.Screen name='botom' component={BottombarNav}/>
        <Stack.Screen name='forgot' component={ForgotPasswordScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
    // <Settings/>
   
  );
}

