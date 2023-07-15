import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

export const guestsList = StyleSheet.create({
  container: {
    height: screenHeight,
  },

  title: {
    marginTop: 20,
  },
  addContactButton: {
    backgroundColor: "#50CC98",
    margin: 20,
  },

  addContactButtonText: {
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF",
    fontWeight: 500,
    fontSize: 22,
  },

  contactList: {
    marginTop: 20,
  },

  contactCard: {
    margin: 10,
    height: 60,
    borderWidth: 2,
    borderColor: "#0000000",
    borderRadius: 5,
    flexDirection: "row",
  },
  contactCardIcon: {
    fontSize: 35,
    padding: 10,
  },
  contactCardDescription: {
    margin: 10,
  },
  submitButton: {
    margin: 20,
  },
  submittButtonText: {
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF",
    fontWeight: 500,
    fontSize: 22,
  },
});
