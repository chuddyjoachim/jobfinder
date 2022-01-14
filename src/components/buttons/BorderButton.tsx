import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface BorderButtonProps {
  height?: string | number | undefined;
  radius?: number | undefined;
  borderColor?: any;
  backgroundColor?: any;
  onPress?: () => {} | void;
}

const BorderButton: React.FC<BorderButtonProps> = ({
  children,
  height,
  radius,
  borderColor,
  backgroundColor,
  onPress,
  ...props
}) => {
  const setHeight = height ? height : 60;
  const setRadius = radius ? radius : 0;
  const setBg = backgroundColor ? backgroundColor : '';
  const borderColor_ = borderColor ? borderColor : '';
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.btnStyle,
        {
          height: setHeight,
          borderRadius: setRadius,
          borderColor: borderColor_,
          backgroundColor: setBg,
        },
      ]}
      {...props}>
      {children}
    </Pressable>
  );
};

export default BorderButton;

const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    // backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
