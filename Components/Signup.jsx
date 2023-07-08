import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; 
import Icon2 from "react-native-vector-icons/FontAwesome"

import { useNavigation } from "@react-navigation/native";
import signup from "../Style/signup"; 

const Signup = () => {
  const navigation = useNavigation();

  const handlePress = (routeName) => {
   
    navigation.navigate(routeName);
  };

  return (
    <View style={signup.style}>
      <View style={signup.header}></View>
      <View style={signup.buttonContainer}>
        <TouchableOpacity
          style={signup.facebookButton}
          onPress={() => handlePress("FacebookAuth")}
        >
          <View style={signup.socialButtonContent}>
            <Icon name="facebook" size={20} color="#000000" />
            <Text>Connect with Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={signup.googleButton}
          onPress={() => handlePress("GoogleAuth")}
        >
          <View style={signup.socialButtonContent}>
            <Icon2 name="google" size={20} color="#000000" />
            <Text>Connect with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={signup.appleButton}
          onPress={() => handlePress("AppleAuth")}
        >
          <View style={signup.socialButtonContent}>
            <Icon2 name="apple" size={20} color="#000000" />
            <Text>Connect with Apple</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
