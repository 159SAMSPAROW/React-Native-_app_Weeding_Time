import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Navbar from "./Navbar";
import GlobalButton from "./GlobalButton";
import { globalButton } from "../Style/button";

import { guestsList } from "../Style/guestsList";
import { styles } from "../Style/global_style";
import Icon from "react-native-vector-icons/MaterialIcons";

const GuestsList = () => {

  const navigation = useNavigation();

  const handleClick = () => {
      navigation.navigate('Confirmation');
    };

  return (
    <View style={guestsList.container}>
      <Navbar />
      <Text style={[styles.h2, guestsList.title]}>Guests List</Text>

      <GlobalButton style={[globalButton.button, guestsList.addContactButton]}>
        <Text style={guestsList.addContactButtonText}>Add Contact</Text>
      </GlobalButton>

      <View style={guestsList.contactList}>
        <View style={guestsList.contactCard}>
          <Icon style={guestsList.contactCardIcon} name="account-circle"></Icon>
          <View style={guestsList.contactCardDescription}>
            <Text>Elon Musk</Text>
            <Text>07 07 07 07 7007</Text>
          </View>
        </View>

        <View style={guestsList.contactCard}>
          <Icon style={guestsList.contactCardIcon} name="account-circle"></Icon>
          <View style={guestsList.contactCardDescription}>
            <Text>Elon Musk</Text>
            <Text>07 07 07 07 7007</Text>
          </View>
        </View>

        <View style={guestsList.contactCard}>
          <Icon style={guestsList.contactCardIcon} name="account-circle"></Icon>
          <View style={guestsList.contactCardDescription}>
            <Text>Elon Musk</Text>
            <Text>07 07 07 07 7007</Text>
          </View>
        </View>

        <View style={guestsList.contactCard}>
          <Icon style={guestsList.contactCardIcon} name="account-circle"></Icon>
          <View style={guestsList.contactCardDescription}>
            <Text>Elon Musk</Text>
            <Text>07 07 07 07 7007</Text>
          </View>
        </View>

        <View style={guestsList.contactCard}>
          <Icon style={guestsList.contactCardIcon} name="account-circle"></Icon>
          <View style={guestsList.contactCardDescription}>
            <Text>Elon Musk</Text>
            <Text>07 07 07 07 7007</Text>
          </View>
        </View>
      </View>
      <GlobalButton style={[globalButton.button, guestsList.submitButton]} onPress={handleClick}>
        <Text style={guestsList.submittButtonText}>Send to your Guests</Text>
      </GlobalButton>
    </View>
  );
};

export default GuestsList;
