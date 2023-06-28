import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = 55;

const homepage_card = StyleSheet.create({
  style: {
    flex: 1,
    minHeight: windowHeight - navbarHeight,
    backgroundColor: "#F5F5F5",
  },

  header: { top: 40 },

  divider: {
    height: 4,
    backgroundColor: "#FFD1DC",
    width: "100%",
    shadowColor: "#FFD1DC",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  banner: {
    height: 80,
    opacity: 0.4,
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
    shadowColor: "#D0C9E2",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
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
    flexDirection: "row",
    justifyContent: "space-between",
    top: "30%",
    width: "100%",
    borderBottomWidth: 4,
    borderBottomColor: "#D0C9E2",
    shadowColor: "#D0C9E2",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  description: {
   width:"80%",
   padding: 15,
   fontSize: 20,
   color: "#462B47",
  },

  eyeContainer: {
    padding: 15,
    alignSelf: "flex-end",
    alignItems: "center",
   
  },

  eye: {
    fontSize: 30,
    color: "#C654E9",
    
  },

  clickText:{
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "#C654E9",
    
  }
});
export default homepage_card;
