import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import Navbar from "./Components/Navbar";
import { styles } from "./Style/global_style";
import Hero_Section from "./Components/Hero_Section";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Hero_Section />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
