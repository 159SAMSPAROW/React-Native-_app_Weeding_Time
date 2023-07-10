import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";
import signup from "../Style/signup";
import { styles } from "../Style/global_style";
import { globalButton } from "../Style/button";
import GlobalButton from "./GlobalButton";

const Signup = () => {
  const navigation = useNavigation();

  const handlePress = (routeName) => {
    navigation.navigate(routeName);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignup = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid email', 'Please enter a valid email.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Invalid password', 'Password should contain at least 8 characters, one uppercase, one lowercase, one number and one special character.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', 'Please make sure your passwords match.');
      return;
    }

    if (!termsAccepted) {
      Alert.alert('Terms not accepted', 'Please accept the terms of use and privacy to proceed.');
      return;
    }

    console.log("signup work");
  };
  return (
    <View style={signup.style}>
      <View style={signup.header}>
        <Text style={styles.h2}>Create Account</Text>
      </View>
      <View style={signup.buttonContainer}>
        <TouchableOpacity
          style={signup.facebookButton}
          onPress={() => handlePress("FacebookAuth")}
        >
          <View style={signup.socialButtonContent}>
            <Icon name="facebook" size={30} color="#6750A4" />
            <Text style={signup.socialButtonText}>Connect with Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={signup.googleButton}
          onPress={() => handlePress("GoogleAuth")}
        >
          <View style={signup.socialButtonContent}>
            <Icon2 name="google" size={30} color="#6750A4" />
            <Text style={signup.socialButtonText}>Connect with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={signup.appleButton}
          onPress={() => handlePress("AppleAuth")}
        >
          <View style={signup.socialButtonContent}>
            <Icon2 name="apple" size={30} color="#6750A4" />
            <Text style={signup.socialButtonText}>Connect with Apple</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={signup.subscribeContainer}>
        <Text style={styles.h2}>Subscribe by Email</Text>
        <View style={signup.subscribeInputContainer}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            style={signup.subscribeInputPlaceholder}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={signup.subscribeInputPlaceholder}
          />
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry
            style={signup.subscribeInputPlaceholder}
          />
          <View style={signup.subscribeCheckbox}>
            <CheckBox
              checked={termsAccepted}
              onPress={() => setTermsAccepted(!termsAccepted)}
            />
            <Text style={signup.subscribeCheckboxText}>
              I accept the terms of Use and Privacy
            </Text>
          </View>
          <View style={signup.subscribeButton}>
          <GlobalButton
            style={globalButton.button}
            title="Click"
            onPress={handleSignup}
          >
            <Text style={signup.clickText}>Register</Text>
          </GlobalButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
