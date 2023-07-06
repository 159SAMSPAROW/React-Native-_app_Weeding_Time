import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./Pages/Homepage";
import WeedingMealPage from "./Pages/WeedingMealPage";
import appNavigator from "./Style/appNavigator";
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator  screenOptions={{
      headerTitleContainerStyle: appNavigator.textStyle,
      headerStyle: appNavigator.containerStyle,
      headerLeftContainerStyle: appNavigator.backButtonStyle,
      headerBackTitleStyle: appNavigator.backButtonTextStyle,
      headerTintColor:"#6750A4",
    }}>
      <Stack.Screen
       
        name="HomePage"
        component={Homepage}
      />
      <Stack.Screen
        name="WeedingMealPage"
        component={WeedingMealPage}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
