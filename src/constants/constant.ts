import React, {Platform, StatusBar, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export let deviceWidth = Dimensions.get('window').width;
export let deviceHeight = Dimensions.get('window').height;

export const globalStyles = StyleSheet.create({
  textPrimary: {
    color: '#4c4c4c',
  },
  textGreen: {
    color: 'green',
  },
  textWhite: {
    color: '#fff',
  },
});
