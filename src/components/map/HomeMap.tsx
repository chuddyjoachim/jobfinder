import React from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapMarker from './MapMarker';
import Entypo from 'react-native-vector-icons/Entypo';
import Drawer from '../Drawer';

const HomeMap = () => {
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
          <MapMarker latitude={mapLat} longitude={mapLng} />
          <MapMarker latitude={mapLat + 0.0145} longitude={mapLng + 0.00911} />
          <MapMarker latitude={mapLat + 0.02065} longitude={mapLng + 0.00991} />
          <MapMarker latitude={mapLat - 0.0232} longitude={mapLng - 0.0139} />
          <MapMarker latitude={mapLat - 0.000232} longitude={mapLng - 0.0139} />
          <MapMarker latitude={mapLat - 0.008232} longitude={mapLng - 0.0139} />
          <MapMarker latitude={mapLat - 0.009232} longitude={mapLng - 0.0169} />
          <MapMarker latitude={mapLat + 0.009232} longitude={mapLng - 0.0169} />
          <MapMarker
            latitude={mapLat + 0.009232}
            longitude={mapLng - 0.00469}
          />
        </MapView>
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
