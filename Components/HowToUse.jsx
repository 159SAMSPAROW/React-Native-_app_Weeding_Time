import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { useFonts } from "expo-font";
import howToUse from "../Style/howToUse";
import { styles } from "../Style/global_style";

const HowToUse = () => {
  return (
    <View style={howToUse.style}>
      <ImageBackground
        source={require("../assets/Images/Flowers_Bg.jpg")}
        style={howToUse.backgroundImage}
      >
        <View style={howToUse.opacityLayer} />
      </ImageBackground>
      <View style={howToUse.content}>
        <Text style={[styles.h2, howToUse.h2]}>HOW DOES IT WORK</Text>

        <View style={howToUse.list}>
          <View style={howToUse.listItem}>
            <View style={howToUse.circle}>
              <Text style={howToUse.number}>1</Text>
            </View>
            <Text style={howToUse.text}>Create your Account</Text>
          </View>
          <View style={howToUse.listItem}>
            <View style={howToUse.circle}>
              <Text style={howToUse.number}>2</Text>
            </View>
            <Text style={howToUse.text}>Select a Category</Text>
          </View>

          <View style={howToUse.listItem}>
            <View style={howToUse.circle}>
              <Text style={howToUse.number}>3</Text>
            </View>
            <Text style={howToUse.text}>Choose your Options</Text>
          </View>

          <View style={howToUse.listItem}>
            <View style={howToUse.circle}>
              <Text style={howToUse.number}>4</Text>
            </View>
            <Text style={howToUse.text}>Send Us your Request</Text>
          </View>

          <View style={howToUse.listItem}>
            <View style={howToUse.circle}>
              <Text style={howToUse.number}>5</Text>
            </View>
            <Text style={howToUse.text}>You will Receive your Quote</Text>
          </View>

          <View style={howToUse.listItem}>
            <View style={howToUse.circle}>
              <Text style={howToUse.number}>6</Text>
            </View>
            <Text style={howToUse.text}>Validate and Sign your Quote</Text>
          </View>

          <View style={howToUse.listItem}>
            <View style={howToUse.circle}>
              <Text style={howToUse.number}>7</Text>
            </View>
            <Text style={howToUse.text}>Send the Menu to your Guests</Text>
          </View>
        </View>

        <Text style={[styles.h2, howToUse.h2]}>AND THERE YOU GO</Text>
      </View>
    </View>
  );
};

export default HowToUse;
