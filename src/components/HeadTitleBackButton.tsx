import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {deviceWidth, globalStyles} from '../constants/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface HeadTitleBackButtonProps {
  btnPress?: () => {} | void;
  title?: string;
}

const HeadTitleBackButton: React.FC<HeadTitleBackButtonProps> = ({
  btnPress,
  title,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        width: deviceWidth,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
      }}>
      {/* btn holder */}
      <View>
        <Pressable onPress={btnPress} style={{padding: 5}}>
          <Text>
            <Ionicons name="chevron-back-sharp" size={35} style={globalStyles.textPrimary} />
          </Text>
        </Pressable>
      </View>

      {/* title header */}
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              globalStyles.fontBold,
              globalStyles.textPrimary,
              {
                fontSize: 20,
              },
            ]}>
            {title ? title : ''}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeadTitleBackButton;

const styles = StyleSheet.create({});
