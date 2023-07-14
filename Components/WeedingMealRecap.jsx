import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";

import React, { useContext } from "react";

import weedingMealRecap from "../Style/weedingMealRecap";
import { styles } from "../Style/global_style";
import { useNavigation } from "@react-navigation/native";
import WeedingMealRecapContext from "../Context/WeedingMealRecapContext";
import { WeedingFormContext } from '../Context/WeedingFormContext'; 

const WeedingMealRecap = () => {
  const { selectedOptions, setSelectedOptions } = useContext(WeedingMealRecapContext);
   
  console.log(selectedOptions);

  // Group options by title
  const optionsByTitle = selectedOptions.reduce((groups, option) => {
    const title = option.title;
    if (!groups[title]) {
      groups[title] = [];
    }
    groups[title].push(option);
    return groups;
  }, {});

  return (
    <View style={weedingMealRecap.style}>
      <View style={weedingMealRecap.header}>
        <Text style={styles.h2}>Meal Recap</Text>
      </View>

      <View style={weedingMealRecap.recapContainer}>
        <View style={weedingMealRecap.recapTitle}>
          <Text style={weedingMealRecap.recapTitleText}>Weeding Meal</Text>
          <ImageBackground
            style={weedingMealRecap.recapBanner}
            source={require("../assets/Images/Background_Texture.jpg")}
          />
        </View>
        {Object.keys(optionsByTitle).map((title, index) => (
          <View style={weedingMealRecap.recapBody} key={index}>
            <Text style={weedingMealRecap.recapBodyH3}>{title}</Text>
            {optionsByTitle[title].map((option, index) => (
              <View key={index} style={weedingMealRecap.recapBodyItem}>
                <Image
                  style={weedingMealRecap.recapBodyImage}
                  source={option.subCategoryItem.path}
                />
                <View style={weedingMealRecap.recapBodyDescription}>
                  <Text style={weedingMealRecap.recapBodyDescriptionText}>
                    {option.subCategoryItem.description}
                  </Text>
                  {option.subCategoryItem.vegan ? (
                    <Text style={weedingMealRecap.recapBodyDescriptionVegan}>
                      Vegan Option
                    </Text>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
        ))}
       
      </View>
    </View>
  );
};

export default WeedingMealRecap;