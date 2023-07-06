import { ScrollView, Dimensions, View, Text } from "react-native";
import Navbar from "../Components/Navbar";
import  WeedingForm from "../Components/WeedingForm.jsx";
import { styles } from "../Style/global_style";
import { weedingMealPage } from "../Style/weedingPage";

const WeedingMealPage = () => {
    const screenHeight = Dimensions.get('window').height;
    const navbarHeight = 55;

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
      </ScrollView>
    </>
  );
};

export default WeedingMealPage;