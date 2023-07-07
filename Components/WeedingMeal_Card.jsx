import React, { useRef, useState } from "react";
import { View, Text, Image, Dimensions, ImageBackground } from "react-native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/MaterialIcons";

import weedingMeal_Card from "../Style/weedingMeal_Card";
import { WeedingMealCard } from "../Constante";
import GlobalButton from "./GlobalButton";
import { globalButton } from "../Style/button";

const WeedingMeal_Card = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [showAllergens, setShowAllergens] = useState(false);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButtonIndex(buttonIndex);
  };

  return (
    <>
      {WeedingMealCard.map((item, index) => {
        const cardKey = Object.keys(item)[0];
        const card = item[cardKey];
        const isButtonSelected = selectedButtonIndex === index;

        return (
          <View style={weedingMeal_Card.style} key={index}>
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
                data={card.images}
                renderItem={({ item, index }) => (
                  <>
                    <Text style={weedingMeal_Card.description2}>
                      {item.vegan ? "Vegan Option" : ""}
                    </Text>
                    <Image
                      style={weedingMeal_Card.carouselImage}
                      source={item.path}
                    />
                  </>
                )}
                sliderWidth={Dimensions.get("window").width}
                itemWidth={Dimensions.get("window").width * 0.42}
                activeSlideAlignment={"center"}
                inactiveSlideScale={0.2}
                onSnapToItem={(index) => {
                  setActiveIndex(index);
                }}
                ref={carouselRef}
              />
              {card.images.map(
                (item, index) =>
                  index === activeIndex && (
                    <View style={weedingMeal_Card.description} key={index}>
                      <Text style={weedingMeal_Card.description1}>
                        {item.description}
                      </Text>
                      <Text style={weedingMeal_Card.price}>{item.price}</Text>
                    </View>
                  )
              )}
              <View style={weedingMeal_Card.allergensContainer}>
                <Text
                  style={weedingMeal_Card.allergensButton}
                  onPress={() => setShowAllergens(!showAllergens)}
                >
                  {showAllergens ? "Hide Allergens" : "Allergens List"}
                </Text>
                {showAllergens && (
                  <View style={weedingMeal_Card.allergensList}>
                    {card.images[activeIndex]?.allergens?.map(
                      (allergen, index) => (
                        <Text style={weedingMeal_Card.allergenItem} key={index}>
                          {allergen}
                        </Text>
                      )
                    )}
                  </View>
                )}
              </View>
            </View>
            <View style={weedingMeal_Card.buttonContainer}>
              <GlobalButton
                style={[
                  globalButton.button,
                  isButtonSelected ? { backgroundColor: "red" } : null,
                ]}
                title="Select This Option"
                onPress={() => handleButtonClick(index)}
              >
                <View style={weedingMeal_Card.button}>
                  <Icon style={weedingMeal_Card.iconButton} name="visibility" />
                  <Text style={weedingMeal_Card.textButton}>
                    {isButtonSelected ? "Selected" : "Select This Option"}
                  </Text>
                </View>
              </GlobalButton>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default WeedingMeal_Card;
