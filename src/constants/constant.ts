import React, {Platform, StatusBar} from 'react-native';
import {Dimensions} from 'react-native';

export const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export let deviceWidth = Dimensions.get('window').width;
export let deviceHeight = Dimensions.get('window').height;