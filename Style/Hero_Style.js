import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = 55;
//console.log(windowHeight);

const heroStyle = StyleSheet.create({
  header: {
    flex: 1,
    height: windowHeight - navbarHeight,
  },

  bg: {
    height: "100%",
  },

  white_spaceTop: {
    height: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  stars: {
    top: 10,
    fontSize: 30,
    color: "#462B47",
    
  },

  divider: {
    height: 4,
    backgroundColor: "#FFD1DC",
    width: "100%",
  },

  background: {
    height: 288,
    opacity: 0.6,
  },

  h1: {
    textAlign: "center",
    color: "#462B47",
    marginTop: 10,
    fontSize: 53,
    lineHeight: 70,
    fontFamily: "Alegreya-Sans-SC",
  },

  scrollDown: {
    position: "absolute",
    top: 680,
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
