import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/index';

export default function App() {
  return (
   <NavigationContainer>
    <StatusBar backgroundColor="#F0F4" barStyle="dark-content"/>
    <Routes/>
   </NavigationContainer>
  )
}
