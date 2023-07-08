import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 62;

const signup = StyleSheet.create({
  style: { flex: 1, height: screenHeight - navbarHeight },
  header: {
    width: "100%",
    height: 200,
  },
  buttonContainer: {
    height: 400,
    display: "flex",

    alignSelf: "center",
  },
  socialButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  facebookButton: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
  },
  googleButton: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
  },
  appleButton: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default signup;
