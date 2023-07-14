import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 55;

const weedingMeal_Card = StyleSheet.create({
  style: {
    flex: 1,
    minHeight: screenHeight - navbarHeight,
  },

  header: {
    top: 0,
  },
  divider: {
    height: 4,
    backgroundColor: "#FFD1DC",
    width: "100%",
  },

  banner: {
    height: 70,
  },

  titleContainer: {
    position: "absolute",
    flexDirection: "row",
    top: 15,
    left: "20%",
  },

  title: {
    fontFamily: "Alegreya-Sans-SC",
    fontSize: 32,
    fontWeight: "light",
    color: "#462B48",
    textDecorationLine: "underline",
  },
  carousel: {
    top: "2%",
    alignItems: "center",
  },
  carouselImage: {
    width: 270,
    height: 250,
    borderRadius: 10,
    borderColor: "#6753DB",
    borderWidth: 3,
    marginLeft: -45,
  },

  description: {
    top: 10,
    right: 20,
    width: 230,
  },
  description1: {
    fontSize: 14,
    color: "#462B48",
    letterSpacing: 5,
    lineHeight: 20,
  },
  price: {
    left: 190,
    bottom: 15,
    fontSize: 18,
    color: "#50CC98",
    fontWeight: "bold",
  },
  veganOption: {
    color: "#50CC98",
    fontSize: 20,
    fontWeight: "bold",
  },

  allergensContainer: {},

  allergensButton: {
    marginLeft: 30,
    marginTop: 15,
    fontSize: 20,
    color: "#50CC98",
    fontWeight: "bold",
    width: "100%",
  },
  allergensList: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    margin: 10,
  },
  allergenItem: {
    margin: 5,
    fontSize: 20,
    color: "red",
  },

  buttonContainer: {
    width: 280,
    marginTop: 30,
    marginLeft: -37,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 50,
  },
  iconButton: {
    fontSize: 30,
    marginRight: 20,
    marginLeft: -10,
    color: "#FFFFFF",
  },
  textButton: {
    fontSize: 22,
    color: "#FFFFFF",
  },
  bottomContainer: {
    flex: 1,
    marginBottom: 150,
  },
  bottomText: {
    margin: 20,
    fontSize: 20,
    letterSpacing: 5,
    textAlign: "center",
  },
  bottomConfirmButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  bottomGtcLink: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontWeight: "500",
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 20,
    fontSize: 20,
    letterSpacing: 5,
  },
});
export default weedingMeal_Card;
