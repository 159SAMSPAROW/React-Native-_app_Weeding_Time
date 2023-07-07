import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 55;

const weedingMeal_Card = StyleSheet.create({
  style: {
    minHeight: screenHeight - navbarHeight,
    borderBottomWidth: 15,
    borderBottomColor: "#D0C9E2",
  },

  header: {
    top: 40,
  },
  divider: {
    height: 4,
    backgroundColor: "#FFD1DC",
    width: "100%",
  },

  banner: {
    height: 60,
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
    top: 75,
    alignItems: "center",
  },
  carouselImage: {
    width: 250,
    height: 180,
    borderRadius: 10,
    borderColor: "#FFD1DC",
    borderWidth: 3,
    resizeMode: "cover",
    marginLeft: -37,
  },

  description: {
    top: 20,
    height: 250,
  },
  description1: {
    fontSize: 20,
    width: 350,
    marginLeft: "10%",
    color: "#462B48",
    letterSpacing: 5,
    lineHeight: 30,
  },
  price: {
    top: 75,
    left: 330,
    fontSize: 22,
    color: "#462B48",
  },
  description2: {
    color: "#50CC98",
    fontSize: 18,
    fontWeight: "bold",
    margin: "4%",
  },

  allergensContainer: {
    position: "absolute",
    left: 20,
    bottom: -50,
  },

  allergensButton: {
    fontSize: 22,
    color: "#50CC98",
  },
  allergensList: {},
  allergenItem: { fontSize: 20 },

  buttonContainer: {
    top: 140,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
   fontSize: 40,
   marginRight: 20,
   marginTop: 2,
   color: "#FFFFFF",
  },
  textButton:{
    fontSize: 22,
    marginTop: 2,
    color: "#FFFFFF",
  },
});
export default weedingMeal_Card;
