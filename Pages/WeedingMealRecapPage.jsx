import { ScrollView, View } from "react-native";
import Navbar from "../Components/Navbar";
import WeedingMealRecap from "../Components/WeedingMealRecap";
import WeedingForm from "../Components/WeedingForm"

import Footer from "../Components/Footer"
import { weedingMealRecapPage } from "../Style/weedingMealRecapPage";

const WeedingMealRecapPage = () => {
  return (
    <View style={weedingMealRecapPage.style}>
      <Navbar />
      <View>
        <ScrollView decelerationRate="fast">
          <WeedingMealRecap />
          <WeedingForm />
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
};

export default WeedingMealRecapPage;
