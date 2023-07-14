import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import { styles } from "./Style/global_style";

import WeedingMealRecapContext from "./Context/WeedingMealRecapContext";
import WeedingFormContext from "./Context/WeedingFormContext";

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [weedingFormState, setWeedingFormState] = useState({
    WeedingName: "",
    address: "",
    guestCount: "",
    weddingDate: new Date(),
  });
  const [quoteData, setQuoteData] = useState(null);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <WeedingFormContext.Provider
          value={{ weedingFormState, setWeedingFormState }}
        >
          <WeedingMealRecapContext.Provider
            value={{ selectedOptions, setSelectedOptions }}
          >
            <AppNavigator />
          </WeedingMealRecapContext.Provider>
        </WeedingFormContext.Provider>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
