import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { navbar_style } from "../Style/navbar";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Navbar() {
  let [fontsLoaded] = useFonts({
    "Arizonia-Regular": require("../assets/fonts/Arizonia-Regular.ttf"),
    "Pacifico": require("../assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={navbar_style.navbar}>
     
        <View style={navbar_style.navbar.container}>
          <Text style={navbar_style.navbar.logo}>Weeding Time</Text>
          <Icon name="menu" style={navbar_style.navbar.burgerMenu} />
          <Icon
            name="account-circle"
            style={navbar_style.navbar.account_circle}
          />
        </View>
    
    </View>
  );
}
