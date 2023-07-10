import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";
import log from "../Style/log";
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

  const handleSignup = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid email', 'Please enter a valid email.');
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
    <View style={log.style}>
      <View style={log.header}>
        <Text style={styles.h2}>Create Account</Text>
      </View>
      <View style={log.buttonContainer}>
        <TouchableOpacity
          style={log.facebookButton}
          onPress={() => handlePress("FacebookAuth")}
        >
          <View style={log.socialButtonContent}>
            <Icon name="facebook" size={30} color="#6750A4" />
            <Text style={log.socialButtonText}>Connect with Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={log.googleButton}
          onPress={() => handlePress("GoogleAuth")}
        >
          <View style={log.socialButtonContent}>
            <Icon2 name="google" size={30} color="#6750A4" />
            <Text style={log.socialButtonText}>Connect with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={log.appleButton}
          onPress={() => handlePress("AppleAuth")}
        >
          <View style={log.socialButtonContent}>
            <Icon2 name="apple" size={30} color="#6750A4" />
            <Text style={log.socialButtonText}>Connect with Apple</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={log.subscribeContainer}>
        <Text style={styles.h2}>Subscribe by Email</Text>
        <View style={log.subscribeInputContainer}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            style={log.subscribeInputPlaceholder}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={log.subscribeInputPlaceholder}
          />
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry
            style={log.subscribeInputPlaceholder}
          />
          <View style={log.subscribeCheckbox}>
            <CheckBox
              checked={termsAccepted}
              onPress={() => setTermsAccepted(!termsAccepted)}
            />
            <Text style={log.subscribeCheckboxText}>
              I accept the terms of Use and Privacy
            </Text>
          </View>
          <View style={log.subscribeButton}>
          <GlobalButton
            style={globalButton.button}
            title="Click"
            onPress={handleSignup}
          >
            <Text style={log.clickText}>Register</Text>
          </GlobalButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
