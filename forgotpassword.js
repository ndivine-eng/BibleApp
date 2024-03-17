import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { auth,sendPasswordResetEmail } from "./firebase"; // Assuming auth is the authentication object from your firebase module

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Email is required');
      return;
    }

    auth.sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Password reset email sent successfully');
      })
      .catch((error) => {
        Alert.alert('Error sending password reset email', error.message);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10 }}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default ForgotPasswordScreen;
