
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


const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='bottomVav' component={BottombarNav} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="Login" component={Login}/>

      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
    // <Settings/>
   
  );
}

