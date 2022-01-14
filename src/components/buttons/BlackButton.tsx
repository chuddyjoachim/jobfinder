import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface BlackButtonProps {
  height?: string | number | undefined;
  radius?: number | undefined;
  onPress?: () => {} | void;
}

const BlackButton: React.FC<BlackButtonProps> = ({
  children,
  height,
  radius,
  onPress,
  ...props
}) => {
  const setHeight = height ? height : 60;
  const setRadius = radius ? radius : 0;
  return (
    <Pressable
      onPress={onPress}
      style={[styles.btnStyle, {height: setHeight, borderRadius: setRadius}]}
      {...props}>
      {children}
    </Pressable>
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
