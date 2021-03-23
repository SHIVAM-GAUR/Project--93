import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import BMICalculation from './screens/B-M-I_calculation';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchnavigator = createSwitchNavigator({
  WelcomeScreen:{
    screen : WelcomeScreen
  },
  BMICalculation :{
    screen : BMICalculation
  }
})


const AppContainer = createAppContainer(switchnavigator);