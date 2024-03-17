import react, { useState, useContext } from "react";
import { ImageBackground, SafeAreaView, View, Text, Pressable, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, Button } from 'react-native-paper';
 import AsyncStorage from "@react-native-async-storage/async-storage";
 import { Firebase_analytics } from "./firebase";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword,getAuth } from "firebase/auth"; // Update import



const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const auth = Firebase_analytics;
const Signin = ({ navigation }) => {
 const userExist = AsyncStorage.getItem('user_data')
   const [email, setEmail] =
      useState("")
   const [password, setPassword] =
      useState("")
   const [emailError, setEmailError] =
      useState("")
   const [passWordError, setPasswordError] =
      useState("")
   const [isLoading, setIsLoading] = useState(false)
   const [showPassword, setShowPassword] = useState(false);
   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };


   // const navigate = useNavigation()

      const auth = Firebase_analytics

    console.log(userExist);
    
   const ValidateForm = () => {
      let Valid = true
      //Validate email
      if (!email.trim()) {
         setEmailError('Email is required')
         Valid = false
      } else if (!isValidEmail(email)) {
         setEmailError('Invalid email format')
         Valid = false
      } else {
         setEmailError('')
      }
      //validate password
      if (password.trim() === '') {
         setPasswordError('password is required')
         Valid = false
      } else {
         setPasswordError('')
      }
      return Valid
   }


   const handleSubmit = async () => {
      if (ValidateForm()) {
         //Perform form submission 
         console.log('Form submitted:',
            email, password)
      

          try {
             const response = await signInWithEmailAndPassword(getAuth(), email, password)
             console.log(response)
             console.log('your now signed in')
             showMessage({
                message: 'login successfully',
                description: 'your now signed in',
                type: 'success',
                icon: 'success',
                duration: 3000
             })
             navigation.navigate('')
          } catch (error) {
             console.log(error)
             showMessage({
                message: "fail to login",
                description: error.code.toString(),
                type: 'danger',
                icon: 'danger',
                duration: 3000
             })
          } finally {
             setIsLoading(false)
          }

      }

   }



   function isValidEmail(email) {
      //Basic email Validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
   }


   return (
      <View style={{ backgroundColor: 'black', height: height }}>
         <FlashMessage position="top" />
         <View style={{ height: 30 }}></View>
         <View style={{ flexDirection: 'row', gap: 5, paddingTop: 30, paddingBottom: 14 }}>
            <Pressable onPress={() => navigation.navigate('')}>
               <View><Icon name='arrow-left' size={22} style={{ color: 'white', marginHorizontal: 20 }} /></View>
            </Pressable>
            <View><Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Sign In</Text></View>
         </View>
         <View style={{ backgroundColor: 'black' }}>
            <View style={{}}></View>
            <View>
               <View style={{ height: 50 }}></View>
               <TextInput
                  textColor="white"
                  label="Email Address"
                  mode='offline'
                  value={email}
                  onChangeText={setEmail}
                  error={emailError}
                  right={<TextInput.Icon icon={"email-outline"} color={'white'} style={{ backgroundColor: 'black' }} />}
                  style={{ backgroundColor: 'black', marginHorizontal: 20, }} />
               {emailError ? (<Text style={{ color: 'red', marginHorizontal: 20 }}>{emailError}</Text>) : null}
            </View>
            <View style={{}}></View>
            <View>
               <TextInput
                  textColor="white"
                  label="Password"
                  mode='offline'
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  error={passWordError}
                  style={{ backgroundColor: 'black', marginHorizontal: 20, }} />
               <TouchableOpacity style={{ position: 'absolute', right: 38, top: 10 }} onPress={togglePasswordVisibility}>
                  <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={26} color={'white'} />
               </TouchableOpacity>
               {passWordError ? (<Text style={{ color: 'red', marginHorizontal: 20 }}>{passWordError}</Text>) : null}
            </View>
            <View style={{ height: 25 }}></View>
            <Pressable onPress={handleSubmit}>
               <Text style={{ backgroundColor: 'gray', textAlign: 'center', marginHorizontal: 20, paddingTop: 10, paddingBottom: 10 }}>Sign In</Text>
            </Pressable>
            <View style={{ height: 40 }}></View>
            <Pressable onPress={() => navigation.navigate('forgot')}>
               <Text style={{ color: 'pink', textAlign: 'center', marginHorizontal: 20, fontSize: 18 }}>Forgot Password?</Text>
            </Pressable>
            <View style={{ height: 350, alignContent: 'center' }}></View>
            <View style={{ marginHorizontal: 20 }}>
               <Text style={{ color: 'grey', fontSize: 18, textAlign: 'center' }}>We value Your Privacy</Text>
               <Text style={{ color: 'grey', fontSize: 18, textAlign: 'center' }}>By signing up,you agree to our Terms and</Text>
               <Text style={{ color: 'grey', fontSize: 18, textAlign: 'center' }}>Privacy Policy</Text>
            </View>

         </View>
      </View>
   )
};
export default Signin;