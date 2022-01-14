import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Drawer from '../Drawer';
import MapMarker from './MapMarker';

const DestinationMap = () => {
  const [{mapLat, mapLng}, setLatLngMap] = React.useState({
    mapLat: 6.5818,
    mapLng: 3.3211,
  });
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.mapContainer}>
        <Drawer />
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: mapLat,
            longitude: mapLng,
            latitudeDelta: 0.008522,
            longitudeDelta: 0.047431,
          }}>
          {/* adding maarkers */}

          <Marker coordinate={{latitude: mapLat, longitude: mapLng}}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#000',
                borderRadius: 1000,
                borderWidth: 4,
                borderColor: '#fff',
              }}
            />
          </Marker>
          <MapMarker latitude={mapLat + 0.00145} longitude={mapLng + 0.00411} />
        </MapView>
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
