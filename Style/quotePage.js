import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 69;

export const quotePage = StyleSheet.create({

    container:{
     alignItems: "center",  
     minHeight: screenHeight - navbarHeight,
    },

    title: {
        height: 60,
        top: 16,
        color: "#6750A4",
    },

    quoteImg:{
       
        width: "90%",
        height: 500,
        borderWidth: 1,
        borderColor: "#000000",
    },

    quoteButton:{
        margin: "15%",
        left: -1,
    },
    quoteButtonText:{
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 22,
        margin: 11,
        fontWeight: "500",
    },
})