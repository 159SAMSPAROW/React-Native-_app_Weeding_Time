import { StyleSheet } from 'react-native';

const appNavigator = StyleSheet.create({

  textStyle: {
    alignSelf: 'flexStart',
    marginLeft: "60%",
    color: "#50CC98",
  },

  containerStyle: {
    height: 25,
  },
  backButtonStyle: {
    alignSelf: 'flexStart', 
  },
  backButtonTextStyle: {
    color: "#50CC98",
    marginBottom: 5,
    fontWeight: "bold", 
    fontSize: 16, 
  },
});

export default appNavigator;