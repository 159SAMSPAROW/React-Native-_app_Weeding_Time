import { StyleSheet } from "react-native";

const navbar_style = StyleSheet.create({
  navbar: {
    display: "flex",
    borderWidth: 3,
    borderColor: "lightgray",
    borderStyle: "solid",

    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    logo: {
      marginLeft: 30,
      fontSize: 40,
      color: "#6750A4",
      fontFamily: "Arizonia-Regular",
    },

    background: {
      resizeMode: "cover",
      resizeMethod: "auto",
      opacity: 0.8,
    },

    burgerMenu: {
      fontSize: 40,
      color: "#6750A4",
      marginLeft: 20,
    },

    account_circle: {
      fontSize: 40,
      color: "#6750A4",
      marginRight: 15,
    },
  },
});

export { navbar_style };
