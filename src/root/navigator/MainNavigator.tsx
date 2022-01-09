import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './mainNavigator/HomePage';
import TimeEstimatePage from './mainNavigator/TimeEstimatePage';
import PaymentPage from './mainNavigator/PaymentPage';
import DestinationPage from './mainNavigator/DestinatinPage';

export type StackParamList = {
  Home: undefined;
  Destination: undefined;
  Loading: undefined;
  Payment: undefined;
  TimeEstimate: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
// export type StackNavProps<T extends keyof StackParamList> = {
// 	navigation: StackNavigationProp<StackParamList, T>;
// };

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="TimeEstimate" component={TimeEstimatePage} />
      <Stack.Screen name="Payment" component={PaymentPage} />
      <Stack.Screen name="Destination" component={DestinationPage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
