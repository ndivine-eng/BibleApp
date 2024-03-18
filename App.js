
import BottombarNav from './Screen/BottombarNav';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Screen/Profile';
import About from './Screen/About';
import 'react-native-gesture-handler';
import Settings from './Screen/Settings';
import Stories from './Screen/Stories';
import Login from './Screen/Login';
import ThemeProvider from "./Context/Themeprovider";
import Todayscreen from "./Screen/Todayscreen";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView} from 'react-native-gesture-handler';



const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='bottomVav' >
        <Stack.Screen name='bottomVav' component={BottombarNav} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="Login" component={Login}/>

        <Stack.Screen name="Todayscreen" component={Todayscreen}/>
        <Stack.Screen name="Stories" component={Stories}/>

        {/* <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
    // <Settings/>
   
  );
}

