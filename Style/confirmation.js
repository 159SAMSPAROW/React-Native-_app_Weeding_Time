import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

export const confirmationPage = StyleSheet.create({

    container: {
        height: screenHeight,
       
      },
      iconContainer:{
        width: 200,
        alignSelf: "center", 
        margin: 50,
         
      },
      icon:{
        fontSize: 200,
        width: 200,
        height: 200,
        borderColor: "#272838",
        borderWidth: 2,
        borderRadius: 100,
        backgroundColor: "#50CC98",
        overflow: "hidden",
      },

      text:{
        fontSize: 30,
        margin:50,
      },
})