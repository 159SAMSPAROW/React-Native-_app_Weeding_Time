import React, { useRef, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/MaterialIcons";

import weedingMeal_Card from "../Style/weedingMeal_Card";
import { WeedingMealCard } from "../Constante";
import GlobalButton from "./GlobalButton";
import { globalButton } from "../Style/button";

import WeedingMealRecapContext from "../Context/WeedingMealRecapContext";

const WeedingMeal_Card = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const carouselRef = useRef(null);
  const [selectedButtonIndices, setSelectedButtonIndices] = useState([]);
  const [showAllergens, setShowAllergens] = useState(false);
  const { setSelectedOptions } = useContext(WeedingMealRecapContext);

  const navigation = useNavigation();

  const handleButtonClick = (categoryIndex, itemIndex) => {
    const indexExists = selectedButtonIndices.some(
      (index) =>
        index.categoryIndex === categoryIndex && index.itemIndex === itemIndex
    );

    if (indexExists) {
      setSelectedButtonIndices(
        selectedButtonIndices.filter(
          (index) =>
            index.categoryIndex !== categoryIndex ||
            index.itemIndex !== itemIndex
        )
      );
    } else {
      setSelectedButtonIndices([
        ...selectedButtonIndices,
        { categoryIndex, itemIndex },
      ]);
    }
  };

  const handleGlobalButtonClick = () => {
    const selectedOptions = selectedButtonIndices.map((index) => {
      const category = WeedingMealCard[index.categoryIndex];
      const cardKey = Object.keys(category)[0];
      const card = category[cardKey];
      return {
        ...card.subCategory[index.itemIndex],
        title: card.title,
      };
    });

    setSelectedOptions(selectedOptions);

    navigation.navigate("WeedingMealRecapPage");
    console.log(selectedOptions);
  };

  return (
    <View style={weedingMeal_Card.style}>
      {WeedingMealCard.map((category, categoryIndex) => {
        const cardKey = Object.keys(category)[0];
        const card = category[cardKey];

        return (
          <View style={weedingMeal_Card.style} key={categoryIndex}>
            <View style={weedingMeal_Card.header}>
              <View style={weedingMeal_Card.divider} />
              <ImageBackground
                style={weedingMeal_Card.banner}
                source={require("../assets/Images/navbar_Bg.jpg")}
              />
              <View style={weedingMeal_Card.divider} />
              <View />
              <View style={weedingMeal_Card.titleContainer}>
                <Text style={weedingMeal_Card.title}>{card.title}</Text>
              </View>
            </View>

            <View style={weedingMeal_Card.carousel}>
              <Carousel
                data={card.subCategory}
                renderItem={({ item, index }) => {
                  const isButtonSelected = selectedButtonIndices.some(
                    (buttonIndex) =>
                      buttonIndex.categoryIndex === categoryIndex &&
                      buttonIndex.itemIndex === index
                  );

                  return (
                    <>
                      <Text style={weedingMeal_Card.veganOption}>
                        {item.subCategoryItem.vegan ? "Vegan Option" : ""}
                      </Text>
                      <Image
                        style={weedingMeal_Card.carouselImage}
                        source={item.subCategoryItem.path}
                      />
                      <>
                        <View style={weedingMeal_Card.description}>
                          <Text style={weedingMeal_Card.description1}>
                            {item.subCategoryItem.description}
                          </Text>
                          <Text style={weedingMeal_Card.price}>
                            {item.subCategoryItem.price}
                          </Text>
                        </View>
                        <View style={weedingMeal_Card.buttonContainer}>
                          <GlobalButton
                            style={[
                              globalButton.button,
                              isButtonSelected
                                ? { backgroundColor: "#50CC98" }
                                : null,
                            ]}
                            title={
                              isButtonSelected
                                ? "Selected"
                                : "Select This Option"
                            }
                            onPress={() =>
                              handleButtonClick(categoryIndex, index)
                            }
                          >
                            <View style={weedingMeal_Card.button}>
                              <Icon
                                style={weedingMeal_Card.iconButton}
                                name={isButtonSelected ? "check" : "add"}
                              />
                              <Text style={weedingMeal_Card.textButton}>
                                {isButtonSelected
                                  ? "Selected"
                                  : "Select This Option"}
                              </Text>
                            </View>
                          </GlobalButton>
                        </View>
                        {showAllergens &&
                          index === activeIndex &&
                          item.subCategoryItem.allergens && (
                            <View style={weedingMeal_Card.allergensList}>
                              {item.subCategoryItem.allergens.map(
                                (allergen, allergenIndex) => (
                                  <Text
                                    style={weedingMeal_Card.allergenItem}
                                    key={allergenIndex}
                                  >
                                    {allergen}
                                  </Text>
                                )
                              )}
                            </View>
                          )}
                        <View style={weedingMeal_Card.allergensContainer}>
                          <Text
                            style={weedingMeal_Card.allergensButton}
                            onPress={() => setShowAllergens(!showAllergens)}
                          >
                            {showAllergens
                              ? "Hide Allergens"
                              : "Allergens List"}
                          </Text>
                        </View>
                      </>
                    </>
                  );
                }}
                sliderWidth={Dimensions.get("window").width}
                itemWidth={Dimensions.get("window").width * 0.42}
                activeSlideAlignment={"center"}
                inactiveSlideScale={0.2}
                onSnapToItem={(index) => setActiveIndex(index)}
                ref={carouselRef}
              />
            </View>
          </View>
        );
      })}

      <View style={weedingMeal_Card.bottomContainer}>
        <Text style={weedingMeal_Card.bottomText}>
          Your quote will be established based on your choices, the venue of the
          reception, and the number of personnel required according to the
          number of guests. For more information, please refer to the{" "}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("TermsAndConditions")}
        >
          <Text style={weedingMeal_Card.bottomGtcLink}>
            General Terms and Conditions (GTC).
          </Text>
        </TouchableOpacity>
        <GlobalButton
          style={[globalButton.button, weedingMeal_Card.bottomButton ]}
          title="Submit"
          onPress={handleGlobalButtonClick}
        >
          <View style={weedingMeal_Card.bottomConfirmButton}>
            <Icon style={weedingMeal_Card.iconButton} name="check" />
            <Text style={weedingMeal_Card.textButton}>Valid this Menu</Text>
          </View>
        </GlobalButton>
      </View>
    </View>
  );
};

export default WeedingMeal_Card;
