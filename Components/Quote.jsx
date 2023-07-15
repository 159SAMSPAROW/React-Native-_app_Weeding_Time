import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import GlobalButton from "./GlobalButton";

import { globalButton } from "../Style/button";
import { quotePage } from "../Style/quotePage";
import { styles } from "../Style/global_style";

import Navbar from "./Navbar";

const Quote = () => {

    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('GuestsList');
      };

  return (
    <>
      <Navbar />
      <View style={quotePage.container}>
        <Text style={[styles.h2, quotePage.title]}>Your Quote</Text>
        <Image style={quotePage.quoteImg}></Image>
        <GlobalButton
         style={[globalButton.button, quotePage.quoteButton]}
         title="Click"
         onPress={handleClick}
         >
          <Text style={quotePage.quoteButtonText}>Valid Your Quote</Text>  
         </GlobalButton>
      </View>
    </>
  );
};

export default Quote;
