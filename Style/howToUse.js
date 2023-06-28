import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = 55;

const howToUse = StyleSheet.create({
  style: {
    minHeight: windowHeight - navbarHeight,
    backgroundColor: "#F5F5F5",
    
    alignItems: "center",
    
  },
  
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },

  opacityLayer: {
    backgroundColor: "#ffffff",
    opacity: 0.1,
    width: '100%',
    height: '100%',
  },

  content: {
    zIndex: 1,
    
  },

  h2: {
   margin: 35,
  },

  list: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#462B48",
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },

  listItem: {
    margin: 10,
    marginBottom: 20,
    alignSelf: "flex-start",
    flexDirection: "row", // Ajoutez cette ligne
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
    marginRight: 10, // Ajoutez cette ligne pour ajouter de l'espace entre le cercle et le texte
  },

  number: {
    color: "#462B48",
    fontSize: 20,
  },
});
export default howToUse;
