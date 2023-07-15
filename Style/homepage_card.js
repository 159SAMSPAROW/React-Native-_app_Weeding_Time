import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 55;

const homepage_card = StyleSheet.create({
  style: {
    flex: 1,
    height: screenHeight - navbarHeight,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    margin: 10,

  },

  illustration: {
    width: 115,
    height: 115,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#D0C9E2",
  },

  title: {
    marginLeft: 10,
    fontFamily: "Alegreya-Sans-SC",
    fontSize: 32,
    fontWeight: "light",
    color: "#462B48",
    textDecorationLine: "underline",
  },

  image: {
    width: "100%",
    height: 350,
    borderWidth: 5,
    borderColor: "#FFD1DC",
  },

  descriptionContainer: {
    width: "100%",
    height: 180,
    marginBottom: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 20,
  },

  description: {
    width: "80%",
    padding: 5,
    fontSize: 20,
    color: "#462B47",
  },

  eyeContainer: {
    margin: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  eye: {
    fontSize: 35,
    marginRight: 5,
    color: "#FFFFFF",
  },

  clickText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    color: "#FFFFFF",
  },
});
export default homepage_card;
