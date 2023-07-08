import { StyleSheet, Dimensions } from "react-native";
const screenHeight = Dimensions.get("window").height;
const navbarHeight = 62;

const homepage_carousel = StyleSheet.create({

  container: {
    flex: 1,
    minHeight: screenHeight - navbarHeight,
    backgroundColor: "rgba(76, 76, 76, 0.1)",
    
  },

  header: {
    flexDirection: "row",
    margin: 40,
    top: 25,
  },

  h2: {
    margin: 40,
  },
 
  carousel: {
    height: 480,
  },

  carouselContainer: {
    marginTop: 20,
  },

  swiper: {
    dotStyle: {
      backgroundColor: "#6753DB",
      width: 80,
      height: 3,
    },
    activeDotStyle: {
      backgroundColor: "#C85BEA",
      width: 85,
      height: 3,
    },
    paginationStyle: {
      bottom: -10,
    },
  },

  carouselItemTitle: {
    fontSize: 33,
  },

  carouselItemDescription: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 60,
    marginTop: 30,
  },

  carouselItemImage: {
    width: 300,
    height: 300,
    marginTop: 50,
    marginLeft: 60,
    borderWidth: 3,
    borderColor: "#C85BEA",
    borderRadius: 140,
  },
  carouselItemIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: "#C85BEA",
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: screenHeight,
    opacity: 0.1,
    borderWidth: 2, 
    borderColor: '#000000', 
  },
});

export default homepage_carousel;
