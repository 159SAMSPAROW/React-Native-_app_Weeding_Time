import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 55;

const heroStyle = StyleSheet.create({
  header: {
    flex: 1,
    height: screenHeight - navbarHeight,
  },

  bg: {
    height: "100%",
  },

  white_spaceTop: {
    height: 125,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  stars: {
    top: 50,
    fontSize: 30,
    color: "#462B47",
    opacity: .6,
  },

  divider: {
    height: 4,
    backgroundColor: "#FFD1DC",
    width: "100%",
  },

  background: {
    height: 388,
    opacity: 0.4,
   
  },

  h1Container: {
    height: 288,
    top: -345,
  },

  h1: {
    textAlign: "center",
    color: "#462B47",
    fontSize: 53,
    lineHeight: 70,
    fontFamily: "Alegreya-Sans-SC",
  },

  scrollDown: {
    position: "absolute",
    top: 647,
    alignSelf: "center",
    alignItems: "center",
  },

  scrollDownText: {
    fontSize: 22,
  },
  scrollDownIcon: {
    fontSize: 32,
  },
});
export default heroStyle;
