<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
=======
import React, { useContext } from 'react';
import { Text, View, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { ChangeDarkMode } from '../Context/Themeprovider';

export default function Login() {
    const { darkMode, HandleMode } = useContext(ChangeDarkMode);

    return (
        <View style={[styles.container, { backgroundColor: darkMode ? '#000' : '#fff' }]}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/new.jpeg')} style={styles.image} />
            </View>

            <TouchableOpacity 
                style={[styles.modeButton, { backgroundColor: darkMode ? '#333' : 'gray' }]} 
                onPress={HandleMode}
            >
                <Text style={styles.modeButtonText}>Change mode</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={[styles.heading, { color: darkMode ? '#fff' : '#000' }]}>Seek God</Text>
                <Text style={[styles.heading, { color: darkMode ? '#fff' : '#000' }]}>Every Day</Text>
            </View>

            <TouchableOpacity style={styles.accountButton}>
                <Text style={[styles.accountButtonText, { color: darkMode ? '#fff' : '#000' }]}>Create Free account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
                <Image source={require('../assets/google.jpeg')} style={styles.googleIcon} />
                <Text style={{ color: darkMode ? '#fff' : '#000' }}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
                <Text style={{ color: darkMode ? '#fff' : '#000' }}>Continue with an email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signInButton}>
                <Text style={{ color: darkMode ? '#fff' : '#000' }}>Have an account? Sign In</Text>
            </TouchableOpacity>

            <View style={styles.privacyContainer}>
                <Text style={{ textAlign: 'center', color: darkMode ? '#fff' : '#000' }}>
                    We value your Privacy. By signing up, you agree to our Terms and Privacy policy.
                </Text>
            </View>
        </View>
    );
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    imageContainer: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
    },
    image: {
        alignSelf: 'center',
        width:150,
        height:150,

    },
    modeButton: {
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    modeButtonText: {
        color: '#fff',
    },
    heading: {
        fontSize: 38,
        fontStyle: 'italic',
        fontWeight: "100",
    },
    accountButton: {
        marginTop: 20,
    },
    accountButtonText: {
        alignSelf: 'center',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        padding: 5,
    },
    googleIcon: {
        width: 15,
        height: 15,
        marginRight: 10,
    },
    signInButton: {
        marginTop: 20,
    },
    privacyContainer: {
        marginTop: 50,
    },
    privacyText: {
        textAlign: 'center',
    },
});
>>>>>>> 57a457d (ok)
