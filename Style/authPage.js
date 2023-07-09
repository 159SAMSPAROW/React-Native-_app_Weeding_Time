import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const navbarHeight = 69;

const authPage = StyleSheet.create({
    page:{
        style: { flex: 1, height: screenHeight - navbarHeight },
    },

})
export default authPage