import React from "react";
import { ImageBackground, View, Text } from "react-native";
import heroStyle from "../Style/hero_Style";
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
      <View style={heroStyle.white_space}>
        <Icon name="star-border" style={heroStyle.stars} />
        <Icon name="star-border" style={heroStyle.stars} />
        <Icon name="star-border" style={heroStyle.stars} />
      </View>
      <View style={heroStyle.divider} />
      <ImageBackground
        source={require("../assets/Images/Flowers.jpg")}
        style={heroStyle.background}
      ></ImageBackground>
      <View style={heroStyle.divider} />
      <Text style={heroStyle.h1}>
        <Text>Welcome !</Text>
      </Text>
      <Text style={heroStyle.h1}>
        <Text>Compose Your Perfect</Text>
      </Text>
      <Text style={heroStyle.h1}>
        <Text>Weeding</Text>
      </Text>
      <View style={heroStyle.white_space}>
        <Icon name="star-border" style={heroStyle.stars} />
        <Icon name="star-border" style={heroStyle.stars} />
        <Icon name="star-border" style={heroStyle.stars} />
      </View>
      <View style={heroStyle.scrollDown}>
        <Text style={heroStyle.scrollDownText}>Please Scroll</Text>
        <Icon
          style={heroStyle.scrollDownIcon}
          name="keyboard-arrow-down"
        ></Icon>
      </View>
    </View>
  );
};

export default Hero_Section;
