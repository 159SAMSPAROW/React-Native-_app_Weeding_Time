import { StyleSheet , Dimensions} from "react-native";

const windowHeight = Dimensions.get('window').height;
const navbarHeight = 55;
//console.log(windowHeight);

const heroStyle = StyleSheet.create({
  header: {
    backgroundColor: "#F5F5F5", 
    flex: 1,
    minHeight: windowHeight - navbarHeight,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  white_space: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  stars: {
    marginTop: 12,
    marginBottom: 20,
    fontSize: 20,
    color: "#462B47",
    opacity: 0.3,
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
    color: "#462B48",
    fontSize: 33,
    lineHeight: 80,
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
export default  heroStyle ;
