import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

interface BlackButtonProps {
  height?: string | number | undefined;
  radius?: number | undefined;
}

const BlackButton: React.FC<BlackButtonProps> = ({
  children,
  height,
  radius,
}) => {
  const setHeight = height ? height : 60;
  const setRadius = radius ? radius : 0;
  return (
    <View
      style={[styles.btnStyle, {height: setHeight, borderRadius: setRadius}]}>
      {children}
    </View>
  );
};

export default BlackButton;

const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
