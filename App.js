import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView } from "react-native";
import Navbar from "./Components/Navbar";
import { styles } from "./Style/global_style";
import Hero_Section from "./Components/Hero_Section";
import Homepage_Card from "./Components/Homepage_Card";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView>
        <Hero_Section />
        <Homepage_Card />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
