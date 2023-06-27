import { StyleSheet, Platform, StatusBar } from "react-native";
//import { useImageDimensions, useDeviceOrientation } from "@react-native-community/hooks";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Si la Pateforme est un android un padding top sera ajouter pour ne pas chevaucher la Status Bar
  },

  scrollView: {
    flex: 1, 
  }

});
export { styles };
