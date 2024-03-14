import react, { useState, useContext } from "react";
import { ImageBackground, SafeAreaView, View, Text, Pressable, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, Button } from 'react-native-paper';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { getAnalytics, createUserWithEmailAndPassword } from "firebase/analytics";
import { Firebase_analytics } from "./firebase";



const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Register= ({ navigation }) => {
   
   const [email, setEmail] =
      useState("")
   const [Password, setPassword] =
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

   const analytics=Firebase_analytics
   
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
      if (Password.trim() === '') {
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
            email, Password)
        

          try {
             const response = await createUserWithEmailAndPassword()
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
            <View><Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Create Account</Text></View>
         </View>
         <View style={{ backgroundColor: 'black' }}>
            <View style={{}}></View>
               <View style={{ height: 50 }}></View>
               <View>
               <TextInput
                  textColor="white"
                  label="First Name"
                  mode='offline'
                  style={{ backgroundColor: 'black', marginHorizontal: 20, }} />
            </View>
            <View style={{height:30}}></View>
            <View>
               <TextInput
                  textColor="white"
                  label="Last Name"
                  mode='offline'
                  style={{ backgroundColor: 'black', marginHorizontal: 20, }} />
            </View>
            <View style={{height:30}}></View>
               <View>
               <TextInput
                  textColor="white"
                  label="Email Address"
                  mode='offline'
                  value={email}
                  onChangeText={setEmail}
                  error={emailError}
                  style={{ backgroundColor: 'black', marginHorizontal: 20, }} />
               {emailError ? (<Text style={{ color: 'red', marginHorizontal: 20 }}>{emailError}</Text>) : null}
            </View>
            <View style={{height:30}}></View>
            <View>
               <TextInput
                  textColor="white"
                  label="Password"
                  mode='offline'
                  secureTextEntry={!showPassword}
                  value={Password}
                  onChangeText={setPassword}
                  error={passWordError}
                  style={{ backgroundColor: 'black', marginHorizontal: 20, }} />
               <TouchableOpacity style={{ position: 'absolute', right: 38, top: 10 }} onPress={togglePasswordVisibility}>
                  <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={26} color={'white'} />
               </TouchableOpacity>
               {passWordError ? (<Text style={{ color: 'red', marginHorizontal: 20 }}>{passWordError}</Text>) : null}
            </View>
            <View style={{ height: 35}}></View>
            <Pressable onPress={handleSubmit}>
               <Text style={{ backgroundColor: 'gray', textAlign: 'center', marginHorizontal: 20, paddingTop: 10, paddingBottom: 10 }}>Sign In</Text>
            </Pressable>
            <View style={{ height: 250, alignContent: 'center' }}></View>
            <View style={{ marginHorizontal: 20 }}>
               <Text style={{ color: 'grey', fontSize: 18, textAlign: 'center' }}>We value Your Privacy</Text>
               <Text style={{ color: 'grey', fontSize: 18, textAlign: 'center' }}>By signing up,you agree to our Terms and</Text>
               <Text style={{ color: 'grey', fontSize: 18, textAlign: 'center' }}>Privacy Policy</Text>
            </View>

         </View>
      </View>
   )
};
export default Register;