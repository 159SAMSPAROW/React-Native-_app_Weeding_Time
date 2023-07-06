import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import Navbar from '../Components/Navbar';
import Hero_Section from '../Components/Hero_Section';
import Homepage_Card from '../Components/Homepage_Card';
import HowToUse from '../Components/HowToUse';
import Homepage_carousel from '../Components/Homepage_carousel';
import Footer from '../Components/Footer';


const HomePage = () => {
  const screenHeight = Dimensions.get('window').height;
  const navbarHeight = 55;

  return (
    <>
      <Navbar />
      <ScrollView
        snapToInterval={screenHeight - navbarHeight}
        decelerationRate='fast'
      >
        <Hero_Section />
        <Homepage_Card />
        <Homepage_carousel />
        <HowToUse />
        <Footer />
      </ScrollView>
    </>
  );
};

export default HomePage;