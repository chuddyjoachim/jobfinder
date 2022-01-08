import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const HomeMap = () => {
  return (
    <>
      <StatusBar translucent backgroundColor={"transparent"}/>
      <View style={styles.mapContainer}>
        <Text>map</Text>
      </View>
    </>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  mapContainer: {
    height: 300,
    backgroundColor: '#a0abff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
