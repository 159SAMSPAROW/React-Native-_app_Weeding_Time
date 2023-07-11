import { ScrollView, Dimensions, View, Text } from "react-native";
import Navbar from "../Components/Navbar";
import WeedingForm from "../Components/WeedingForm.jsx";
import WeedingMeal_Card from "../Components/WeedingMeal_Card";
import { styles } from "../Style/global_style";
import { weedingMealPage } from "../Style/weedingMealPage";
import Footer from "../Components/Footer";

const WeedingMealPage = () => {
  const screenHeight = Dimensions.get("window").height;
  const navbarHeight = 62;

  return (
    <>
      <Navbar />
      <ScrollView
        snapToInterval={screenHeight - navbarHeight}
        decelerationRate="fast"
      >
        <View style={weedingMealPage.title}>
          <Text style={styles.h2}>Weeding Meal</Text>
        </View>
        <WeedingForm />
        <WeedingMeal_Card />
        <Footer />
      </ScrollView>
    </>
  );
};

export default WeedingMealPage;
