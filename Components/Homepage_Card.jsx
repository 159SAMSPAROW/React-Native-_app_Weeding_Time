import { View, Text, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialIcons";

import homepage_card from "../Style/homepage_card";
import { HomepageCardContent } from "../Constante";

import { LinearGradient } from "expo-linear-gradient";
import GlobalButton from "./GlobalButton";
import { globalButton } from "../Style/button";

const Homepage_card = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    "Alegreya-Sans-SC": require("../assets/fonts/AlegreyaSansSC-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      {HomepageCardContent.map((item, index) => {
        const categoryKey = Object.keys(item)[0];
        const category = item[categoryKey];

        return (
          <View
            style={homepage_card.style}
            key={index}
            category={category}
            navigateToPage={() => navigation.navigate("WeedingMealPage")}
          >
            <View style={homepage_card.header}>
              <View style={homepage_card.divider} />
              <ImageBackground
                style={homepage_card.banner}
                source={require("../assets/Images/navbar_Bg.jpg")}
              />
              <View style={homepage_card.divider} />

              <View style={homepage_card.titleContainer}>
                <Image
                  style={homepage_card.illustration}
                  source={category.illustration}
                />
                <Text style={homepage_card.title}>{category.title}</Text>
              </View>
            </View>

            <View style={homepage_card.body}>
              <Image style={homepage_card.image} source={category.image} />
              <View style={homepage_card.descriptionContainer}>
                <Text style={homepage_card.description}>
                  {category.description}
                </Text>
                <GlobalButton
                  style={globalButton.button}
                  title="Click"
                  onPress={() => navigation.navigate("WeedingMealPage")}
                >
                  <View style={homepage_card.eyeContainer}>
                    <Icon style={homepage_card.eye} name="visibility" />
                    <Text style={homepage_card.clickText}>
                      Click to See More
                    </Text>
                  </View>
                </GlobalButton>
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default Homepage_card;
