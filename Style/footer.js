import { StyleSheet, Dimensions } from "react-native";

export const footer = StyleSheet.create({
  footerSection: {
    backgroundColor: "#6750A4",
    alignItems: "center",
  },

  footerLink: {
    textAlign: "center",
    margin: " 4% 1%",
    color: "#FFFFFF",
    fontSize: 28,
    textDecorationLine: "underline",
  },

  socialIconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialIcon: {
    color: "#FFFFFF",
    margin: 20,
  },
});
