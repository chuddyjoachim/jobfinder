import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Marker} from 'react-native-maps';

interface MapMarkerProps {
  longitude: number;
  latitude: number;
}

const MapMarker: React.FC<MapMarkerProps> = ({latitude, longitude}) => {
  return (
    <Marker coordinate={{latitude, longitude}}>
      <Image
        source={require('../../assets/images/person1.png')}
        style={{
          width: 50,
          height: 50,
        }}
      />
    </Marker>
  );
};

export default MapMarker;

const styles = StyleSheet.create({});
