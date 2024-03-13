
import BottombarNav from './Screen/BottombarNav';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Screen/Profile';
import About from './Screen/About';
import 'react-native-gesture-handler';
import Settings from './Screen/Settings';


const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='bottomVav' component={BottombarNav} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <Settings/>
   
  );
}

