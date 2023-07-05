import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Dimensions } from "react-native";
import Navbar from "./Components/Navbar";
import { styles } from "./Style/global_style";
import Hero_Section from "./Components/Hero_Section";
import Homepage_Card from "./Components/Homepage_Card";
import HowToUse from "./Components/HowToUse";
import Homepage_carousel from "./Components/Homepage_carousel";
import Footer from "./Components/Footer";

export default function App() {
  // Obtenez la hauteur de l'écran
  const screenHeight = Dimensions.get("window").height;
  const navbarHeight = 55;

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView
        snapToInterval={screenHeight - navbarHeight} // Snap to the height of the screen
        decelerationRate="fast" // Speed at which the scrolling will stop
      >
        <Hero_Section />
        <Homepage_Card />
        <Homepage_carousel/>
        <HowToUse />
        <Footer />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
