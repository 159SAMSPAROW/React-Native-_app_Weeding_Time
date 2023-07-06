import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./Pages/Homepage";
import WeedingMealPage from "./Pages/WeedingMealPage";
import appNavigator from "./Style/appNavigator";
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleContainerStyle: appNavigator.textStyle,
          headerStyle: appNavigator.containerStyle,
        }}
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
        options={{
          headerTitleContainerStyle: appNavigator.textStyle,
          headerStyle: appNavigator.containerStyle,
        }}
        name="WeedingMealPage"
        component={WeedingMealPage}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
