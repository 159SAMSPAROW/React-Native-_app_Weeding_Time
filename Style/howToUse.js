import { StyleSheet, Dimensions } from "react-native";

const howToUse = StyleSheet.create({
  style: {
    height: 670,
    alignItems: "center",
  },

  backgroundImage: {
    height: 670,
  },
  h2: {
    padding: 20,
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
