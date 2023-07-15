import React from "react";
import { View, Text } from "react-native";
import { confirmationPage } from "../Style/confirmation";
import Icon from "react-native-vector-icons/MaterialIcons";

const Confirmation = () => {
  return (
    <View style={confirmationPage.container}>
      <View style={confirmationPage.iconContainer}>
        <Icon style={confirmationPage.icon} name="check"></Icon>
      </View>
      <Text style={confirmationPage.text}>
        The request has been sent, and once everyone has responded before the
        deadline, you will receive the refined quote based on your guests'
        choices.
      </Text>
    </View>
  );
};

export default Confirmation;
