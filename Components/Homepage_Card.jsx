import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";
import homepage_card from "../Style/homepage_card";

const Homepage_card = ({ bannerSource, illustrationSource, title, description, onPress }) => {
  let [fontsLoaded] = useFonts({
    "Alegreya-Sans-SC": require("../assets/fonts/AlegreyaSansSC-Regular.ttf"),
  });

  return (

    <View style={homepage_card.style}>
      <View style={homepage_card.header}>
        <View style={homepage_card.divider} />
        <ImageBackground
          style={homepage_card.banner}
          source={require("../assets/navbar_Bg.jpg")}
        />
        <View style={homepage_card.divider} />

        <View style={homepage_card.titleContainer}>
          <Image
            style={homepage_card.illustration}
            source={require("../assets/Cocktail_Reception_illustration.jpg")}
          />
          <Text style={homepage_card.title}>Cocktail Reception</Text>
        </View>
      </View>

      <View style={homepage_card.body}>
        <Image
          style={homepage_card.image}
          source={require("../assets/Cocktail_Reception.jpg")}
        />
        <View style={homepage_card.descriptionContainer}>
          <Text style={homepage_card.description}>
            Explore our proposals for cocktail pieces and Show cooking to
            personalize and make your cocktail after the weeding ceremony
            unforgettable !
          </Text>
          <View style={homepage_card.eyeContainer}>
            <Icon style={homepage_card.eye} name="visibility" />
            <Text style={homepage_card.clickText}>Click</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Homepage_card;
