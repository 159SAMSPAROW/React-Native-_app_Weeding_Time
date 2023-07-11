import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import { styles } from "./Style/global_style";

import WeedingMealRecapContext from "./Context/WeedingMealRecapContext";

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <WeedingMealRecapContext.Provider
          value={{ selectedOptions, setSelectedOptions }}
        >
          <AppNavigator />
        </WeedingMealRecapContext.Provider>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
