import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const HomeMap = () => {
  const [{mapLat, mapLng}, setLatLngMap] = React.useState({mapLat: 6.5818, mapLng: 3.3211});
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.mapContainer}>
        {/* <Text>map</Text> */}
        {/* <MapView/> */}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: mapLat,
            longitude: mapLng,
            latitudeDelta: 0.008522,
						longitudeDelta: 0.047431,
          }}
        />
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
