import { ScrollView, Dimensions } from "react-native";
import Navbar from "./Components/Navbar";
import  WeedingForm from "./Components/WeedingForm.jsx";

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
        <WeedingForm />
      </ScrollView>
    </>
  );
};

export default WeedingMealPage;
