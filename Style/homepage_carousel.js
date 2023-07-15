import { StyleSheet, Dimensions } from "react-native";
const screenHeight = Dimensions.get("window").height;

const homepage_carousel = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },

  h2: {
    marginLeft: 10,
  },

  carousel: {
    height: "75%",
  },

  carouselContainer: {
    marginTop: 10,
  },

  swiper: {
    dotStyle: {
      backgroundColor: "#6753DB",
      width: 80,
      height: 5,
    },
    activeDotStyle: {
      backgroundColor: "#C85BEA",
      width: 85,
      height: 7,
    },
    paginationStyle: {
      bottom: -10,
    },
  },

  carouselItemTitle: {
    fontSize: 33,
    color: "#6753DB",
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
    borderRadius: 150,
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
    height: 465,
    opacity: 0.1,
  },
});

export default homepage_carousel;
