import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import MainNavigator from './navigator/MainNavigator';

const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
};

export default Routes;
