import React, { useState } from "react";
import { ImageBackground, View, Text, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

import homepage_carousel from "../Style/homepage_carousel";
import { styles } from "../Style/global_style";
import homepage_card from "../Style/homepage_card";

import { carouselItems } from "../Constante";

const Homepage_carousel = ({ item, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={homepage_carousel.container}>
      <View style={homepage_carousel.header}>
        <Image
          style={homepage_card.illustration}
          source={require("../assets/Images/Ambiance_illustration.jpg")}
        />
        <Text style={[styles.h2, homepage_carousel.h2]}>AMBIANCE</Text>
      </View>

      <View style={homepage_carousel.carouselContainer}>
        <ImageBackground
          style={homepage_carousel.background}
          source={require("../assets/Images/Background_Texture.jpg")}
        />

        <View style={homepage_carousel.carousel}>
          <Swiper
            style={homepage_carousel.swiper}
            showsPagination={true}
            loop={false}
            dotStyle={homepage_carousel.swiper.dotStyle}
            activeDotStyle={homepage_carousel.swiper.activeDotStyle}
            paginationStyle={homepage_carousel.swiper.paginationStyle}
            onIndexChanged={(index) => setActiveIndex(index)}
          >
            {carouselItems.map((item, index) => (
              <View key={index}>
                <Image
                  style={homepage_carousel.carouselItemImage}
                  source={item.image}
                />
                <View style={homepage_carousel.carouselItemDescription}>
                  <Text style={homepage_carousel.carouselItemTitle}>
                    {item.title}
                  </Text>
                  <Image
                    style={homepage_carousel.carouselItemIcon}
                    source={item.icon}
                  />
                </View>
              </View>
            ))}
          </Swiper>
        </View>
      </View>
    </View>
  );
};

export default Homepage_carousel;
