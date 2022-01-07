import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeController = () => {
  return (
    <View>
      <Text>HomeController --</Text>
      <Text>
        <Icon name="rocket" size={30} color="#900" />;
      </Text>
    </View>
  );
};

export default HomeController;

const styles = StyleSheet.create({});
