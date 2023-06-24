import React from "react";
import { ImageBackground, View, Text } from "react-native";
import heroStyle from "../Style/Hero_Style";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";

const Hero_Section = () => {
  let [fontsLoaded] = useFonts({
    "Alegreya-Sans-SC": require("../assets/fonts/AlegreyaSansSC-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={heroStyle.header}>
      <View style={heroStyle.header.white_space}>
        <Icon name="star-border" style={heroStyle.header.white_space.stars} />
        <Icon name="star-border" style={heroStyle.header.white_space.stars} />
        <Icon name="star-border" style={heroStyle.header.white_space.stars} />
      </View>
      <ImageBackground
        source={require("../assets/Flowers.jpg")}
        style={heroStyle.background}
      ></ImageBackground>
      <Text style={heroStyle.h1}>
        <Text>Welcome !</Text>
      </Text>
      <Text style={heroStyle.h1}>
        <Text>Compose Your Perfect</Text>
      </Text>
      <Text style={heroStyle.h1}>
        <Text>Weeding</Text>
      </Text>
      <View style={heroStyle.header.white_space}>
        <Icon name="star-border" style={heroStyle.header.white_space.stars} />
        <Icon name="star-border" style={heroStyle.header.white_space.stars} />
        <Icon name="star-border" style={heroStyle.header.white_space.stars} />
      </View>
      <View style={heroStyle.scrollDown}>
        <Text style={heroStyle.scrollDownText}>Please Scroll</Text>
        <Icon style={heroStyle.scrollDownIcon} name="keyboard-arrow-down"></Icon>
      </View>
    </View>
  );
};

export default Hero_Section;
