import React from 'react';
import { View, Text, Image } from 'react-native';

import { quotePage } from "../Style/quotePage"
import { styles } from "../Style/global_style";

import Navbar from './Navbar';


const Quote = () => {
  return (
   <View>
    <Navbar />
    <Text style={[styles.h2, quotePage.title]}>Your Quote</Text>
    <Image></Image>
   </View>
  );
}

export default Quote;
