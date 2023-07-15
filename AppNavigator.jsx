import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./Pages/Homepage";
import WeedingMealPage from "./Pages/WeedingMealPage";
import AuthPage from "./Pages/AuthPage";
import WeedingMealRecapPage from "./Pages/WeedingMealRecapPage";
import Quote from "./Components/Quote";
import GuestsList from "./Components/GuestList";
import Confirmation from "./Components/Confirmation";

import appNavigator from "./Style/appNavigator";
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleContainerStyle: appNavigator.textStyle,
        headerStyle: appNavigator.containerStyle,
        headerLeftContainerStyle: appNavigator.backButtonStyle,
        headerBackTitleStyle: appNavigator.backButtonTextStyle,
        headerTintColor: "#6750A4",
      }}
    >
      <Stack.Screen name="HomePage" component={Homepage} />
      <Stack.Screen name="WeedingMealPage" component={WeedingMealPage} />
      <Stack.Screen name="AuthPage" component={AuthPage} />
      <Stack.Screen
        name="WeedingMealRecapPage"
        component={WeedingMealRecapPage}
      />
      <Stack.Screen name="Quote" component={Quote} />
      <Stack.Screen name="GuestsList" component={GuestsList}/>
      <Stack.Screen name="Confirmation" component={Confirmation}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;
