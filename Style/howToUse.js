import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 62;

const howToUse = StyleSheet.create({
  style: {
    minHeight: screenHeight - navbarHeight,
    alignItems: "center",
  },

  backgroundImage:{
    height: "auto",
  },
  h2: {
    margin: 40,
  },

  list: {
 
    margin: 10,
    width: "95%",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#462B48",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    top: -10,
  },

  listItem: {
    margin: 15,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    color: "#462B48",
  },

  circle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#EADDFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  number: {
    color: "#462B48",
    fontSize: 20,
  },
});
export default howToUse;
