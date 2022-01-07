import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './mainNavigator/HomePage';

type StackParamList = {
  Home: undefined;
  Destination: undefined;
  Loading: undefined;
  Payment: undefined;
  TimeEstimate: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
