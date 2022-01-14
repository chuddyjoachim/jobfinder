import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Drawer = () => {
  return (
    <Pressable
      onPress={() => {}}
      style={{
        width: 60,
        height: 60,
        borderRadius: 1000,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 40,
        left: 25,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Entypo name="menu" size={40} color="#191919" />
    </Pressable>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
