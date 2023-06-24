import { StyleSheet } from "react-native";

const heroStyle = StyleSheet.create({
  header: {
    height: 70,

    white_space: {
      height: 50,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 30,

      stars: {
        fontSize: 30,
        color: "#462B47",
      },
    },
  },

  background: {
    height: 288,
    opacity: 0.6,
  },

  h1: {
    textAlign: "center",
    color: "#462B48",
    fontSize: 33,
    lineHeight: 100,
    fontFamily: "Alegreya-Sans-SC",
  },

  scrollDown: {
    position: "absolute",
    top: 700,
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
