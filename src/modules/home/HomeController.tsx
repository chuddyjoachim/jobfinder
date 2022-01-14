import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeBottomDescription from '../../components/bottomDescription/HomeBottomDescription';
import HomeMap from '../../components/map/HomeMap';

const HomeController = () => {
  return (
    <>
      <HomeMap />
      <HomeBottomDescription />
    </>
  );
};

export default HomeController;

const styles = StyleSheet.create({});
