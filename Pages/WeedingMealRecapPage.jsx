import React, { useContext } from "react";
import { ScrollView, Dimensions, View } from "react-native";
import Navbar from "../Components/Navbar";
import WeedingMealRecap from "../Components/WeedingMealRecap";
import { weedingMealRecapPage } from "../Style/weedingMealRecapPage";

const WeedingMealRecapPage = () => {
 
  return (
    <View style={weedingMealRecapPage.style}>
      <Navbar />
      <View>
        <ScrollView
          decelerationRate="fast"
        >
          <WeedingMealRecap />
        </ScrollView>
      </View>
    </View>
  );
};

export default WeedingMealRecapPage;
