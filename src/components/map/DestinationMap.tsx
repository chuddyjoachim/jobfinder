import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const DestinationMap = () => {
  return (
    <>
      <StatusBar translucent backgroundColor={"transparent"}/>
      <View style={styles.mapContainer}>
        <Text>Destination map</Text>
      </View>
    </>
  );
};

export default DestinationMap;

const styles = StyleSheet.create({
  mapContainer: {
    height: 300,
    backgroundColor: '#a0abff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
