import { StyleSheet } from "react-native";

export const globalButton = StyleSheet.create({
  button: {
   
    width: "90%",
    height: 55,
    backgroundColor: "transparent",
    borderRadius: 5,
    borderColor: "#6750A4",
    borderWidth: 3,
    backgroundColor: "#C654E9",
  },
});

export const smallButton = StyleSheet.create({
  button: {
    width: 100,
    height: 55,
    backgroundColor: "transparent",
    borderRadius: 5,
    borderColor: "#6753DB",
    borderWidth: 3,
    backgroundColor: "#C654E9",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 18,
    letterSpacing: 5,
  },
});
