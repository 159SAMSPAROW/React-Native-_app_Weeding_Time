import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 55;

export const weedingMealRecapPage = StyleSheet.create({
  style: {
    minHeight: screenHeight - navbarHeight,
    paddingBottom: 180,
  },
});
