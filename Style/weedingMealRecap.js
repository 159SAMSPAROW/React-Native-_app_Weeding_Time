import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 55;

const weedingMealRecap = StyleSheet.create({
  style: {
    minHeight: screenHeight - navbarHeight,
  },

  header: {
    marginTop: 20,
    marginBottom: 20,
  },

  recapContainer: {},
  recapTitle: {
    marginBottom: 25,
    borderTopColor: "#FFD1DC",
    borderTopWidth: 3,
    borderBottomColor: "#FFD1DC",
    borderBottomWidth: 3,
  },
  recapTitleText: {
    position: "absolute",
    top: 7,
    left: 110,
    fontSize: 32,
    color: "#462B48",
  },

  recapBanner: {
    height: 55,
    opacity: 0.1,
  },
  recapBody: {
    
    alignItems: "center",
  },

  recapBodyH3: {
    fontSize: 22,
    margin:"2%",
    textDecorationLine: "underline",
    color: "#462B48",
  },
  recapBodyItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "2%",
  },

  recapBodyImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  recapBodyDescription: {
    width: "80%",
    flexDirection: "column",
  },
  recapBodyDescriptionText:{
    fontSize: 16,
  },
  recapBodyDescriptionVegan:{
    marginTop: 10,
    color: "#50CC98",
    fontSize: 16,
  },
});
export default weedingMealRecap;
