import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 55;

const log = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    display: "flex",
    alignSelf: "center",
    marginBottom: 15,
  },

  socialButtonContent: {
    margin: 15,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    height: 40,
  },
  socialButtonText: {
    fontSize: 18,
    marginLeft: 10,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
  },
  appleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  subscribeContainer: {
    alignItems: "center",
  },
  subscribeInputContainer: {
    marginTop: 20,
  },
  subscribeInputPlaceholder: {
    fontSize: 19,
    borderBottomColor: "#6750A4",
    borderBottomWidth: 1,
    marginTop: 15,
    width: 350,
  },
  subscribeCheckbox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  subscribeCheckboxText: {
    fontSize: 17,
  },
  subscribeButton: {
    marginTop: 25,
    marginBottom: 35,
  },
  clickText: {
    padding: 12,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    color: "#FFFFFF",
  },
});

export default log;
