import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;
const navbarHeight = 55;


const homepage_carousel = StyleSheet.create({

    container:{
        minHeight: windowHeight - navbarHeight,
    },

    header: {
        flexDirection: "row",
        margin: 20,
    },

    h2:{
        margin: 40, 
    },

    carousel: {
      height: 400,  
    },

    background: {
        width: "100%",
        height: 450,
        opacity: 0.2,
    }
});

export default homepage_carousel;