import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import GlobalButton from "./GlobalButton";
import { globalButton } from "../Style/button";

import log from "../Style/log";
import { styles } from "../Style/global_style";

import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid email", "Please enter a valid email.");
      return;
    }


    console.log("Login successful");

 
    navigation.navigate("HomePage");
  };

  const handlePress = (routeName) => {
    console.log(routeName); // For now, just log the routeName
  };

  return (
    <View style={log.style}>
      <View style={log.header}>
        <Text style={styles.h2}>Login</Text>
      </View>
      <View style={log.subscribeContainer}>
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

          {/* I'm assuming you want to add another TouchableOpacity here for AppleAuth */}
          <TouchableOpacity
            onPress={() => handlePress("AppleAuth")}
          >
            <View style={log.socialButtonContent}>
              <Icon2 name="apple" size={30} color="#6750A4" />
              <Text style={log.socialButtonText}>Connect with Apple</Text>
            </View>
          </TouchableOpacity>
        </View>

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

          <View style={log.subscribeButton}>
            <GlobalButton
              style={globalButton.button}
              title="Click"
              onPress={handleLogin} 
            >
              <Text style={log.clickText}>Login</Text> 
            </GlobalButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;