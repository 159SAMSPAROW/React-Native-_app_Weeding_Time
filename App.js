import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { styles } from './Style/global_style';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
        <StatusBar style='auto' />
      </SafeAreaView>
    </NavigationContainer>
  );
}