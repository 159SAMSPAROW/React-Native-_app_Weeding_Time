import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./Homepage";
import WeedingMealPage from "./WeedingMealPage";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="WeedingMealPage" component={WeedingMealPage} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
