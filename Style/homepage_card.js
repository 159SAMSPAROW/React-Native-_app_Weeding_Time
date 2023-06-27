import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = 55;

const homepage_card = StyleSheet.create({
  style: {
    flex: 1,
    minHeight: windowHeight - navbarHeight,
    backgroundColor: "#F5F5F5",
  },

  header: { top: 50 },

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
    height: 55,
    opacity: 0.4,
  },

  titleContainer: {
    position: "absolute",
    flexDirection: "row",
    top: -13,
  },

  illustration: {
    width: 85,
    height: 85,
    borderRadius: 50,
    left: 20,
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
    top: 26,
    left: 40,
    fontFamily: "Alegreya-Sans-SC",
    fontSize: 28,
    fontWeight: "light",
    color: "#462B48",
    textDecorationLine: "underline",
  },

  body: {
    
  },

  image: {
    width: "100%",
    height: 200,
    top: "30%",
  },

  descriptionContainer: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "27%",
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
   fontSize: 18,
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
