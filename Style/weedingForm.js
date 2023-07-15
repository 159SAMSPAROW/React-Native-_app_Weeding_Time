import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 62;

export const weedingForm = StyleSheet.create({
  formSection: {
    minHeight: screenHeight - navbarHeight,
    width: "100%",
    alignItems: "center",
  },
  container: {
    marginTop: 80,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 50,
    width: 275,
    marginBottom: 10,
    paddingLeft: 30,
    borderRadius: 5,
    fontSize: 22,
    borderLeftWidth: 3,
    borderLeftColor: "#FFFFFF",
    borderRightWidth: 3,
    borderRightColor: "#FFFFFF",
    borderBottomWidth: 3,
    borderBottomColor: "#FFFFFF",
  },
  label: {
    position: "absolute",
    top: -17,
    left: 10,
    paddingHorizontal: 5,
    color: "#6750A4",
    fontSize: 24,
    zIndex: 1,
  },
  inputContainer2: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label2: {
    marginRight: 10,
    color: "#6750A4",
    fontSize: 22,
  },
  input2: {
    height: 50,
    width: 80,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    borderRadius: 5,
  },
  topBorder: {
    borderTopWidth: 3,
    borderTopColor: "#FFFFFF",
    width: "35%",
    position: "absolute",
    top: 0,
    right: 0,
  },
  searchIcon: {
    position: "absolute",
    top: 14,
    left: 12,
    color: "#6750A4",
    opacity: 0.8,
  },
  inputDate: {
    height: 50,
    width: 160,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    borderRadius: 5,
  },
  calendarIcon: {
    position: "absolute",
    top: 8,
    right: 5,
  },

  inputDateContainer: {
    width: 150,
    height: 50,
    flexDirection: "row-reverse",

    borderWidth: 3,
    borderColor: "#FFFFFF",
    borderRadius: 5,
  },
  starsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "5%",
  },
  stars: {
    fontSize: 30,
    color: "#FFFFFF",
    opacity: 0.8,
  },

  divider: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    marginTop: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6750A4",
    margin: "4%",
    textAlign: "center",
    lineHeight: 35,
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "500",
  },
});
