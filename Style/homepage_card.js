import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = 55;

const homepage_card = StyleSheet.create({
  style: {
    flex: 1,
    minHeight: windowHeight - navbarHeight,
    borderBottomWidth: 15,
    borderBottomColor: "#D0C9E2",
    gradient: {
      flex: 1,
    },
  },

  bg: {
    height: "100%",
  },
  header: { top: 40 },

  divider: {
    height: 4,
    backgroundColor: "#FFD1DC",
    width: "100%",
  },

  banner: {
    height: 80,
  },

  titleContainer: {
    position: "absolute",
    flexDirection: "row",
    top: -13,
  },

  illustration: {
    width: 115,
    height: 115,
    borderRadius: 60,
    left: 15,
    borderWidth: 4,
    borderColor: "#D0C9E2",
  },

  title: {
    position: "relative",
    top: 32,
    left: "25%",
    fontFamily: "Alegreya-Sans-SC",
    fontSize: 32,
    fontWeight: "light",
    color: "#462B48",
    textDecorationLine: "underline",
  },

  image: {
    width: "100%",
    height: 350,
    top: "20%",
    borderWidth: 5,
    borderColor: "#FFD1DC",
  },

  descriptionContainer: {
    width: "100%",
    height: 180,
    marginBottom: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    top: "23%",
    left: "2%",
  },

  description: {
    width: "80%",
    padding: 5,
    fontSize: 20,
    color: "#462B47",
  },

  eyeContainer: {
    top: "2%",
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
