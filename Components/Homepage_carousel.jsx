import React from "react";
import { ImageBackground, View, Text, Image } from "react-native";
import homepage_carousel from "../Style/homepage_carousel";
import { styles } from "../Style/global_style";
import homepage_card from "../Style/homepage_card";

const Homepage_carousel = () => {
  return (
    <View style={homepage_carousel.container}>
      <View style={homepage_carousel.header}>
        <Image
          style={homepage_card.illustration}
          source={require("../assets/Ambiance_illustration.jpg")}
        />
        <Text style={[styles.h2, homepage_carousel.h2]}>AMBIANCE</Text>
      </View>

      <View style={homepage_carousel.carousel}>
        <ImageBackground style={homepage_carousel.background} source={require("../assets/Background_Texture.jpg")}/>

      </View>
    </View>
  );
};

export default Homepage_carousel;
                                                        