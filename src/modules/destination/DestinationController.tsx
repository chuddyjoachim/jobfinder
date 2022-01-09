import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DestinationBottomDescription from '../../components/bottomDescription/DestinationBottomDescription';
import DestinationMap from '../../components/map/DestinationMap';

const DestinationController = () => {
  return (
    <>
      <DestinationMap />
      <DestinationBottomDescription />
    </>
  );
};

export default DestinationController;

const styles = StyleSheet.create({});
