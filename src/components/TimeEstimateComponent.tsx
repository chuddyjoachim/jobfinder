import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../constants/constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface TimeEstimateComponentProps {
  startText?: string;
  endText?: string;
  check?: true;
}

const TimeEstimateComponent: React.FC<TimeEstimateComponentProps> = ({
  startText,
  endText,
  check,
}) => {
  return (
    <View
      style={{
        width: '100%',
        borderBottomColor: '#4c4c4c',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 25,
      }}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        {/* left */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{marginRight: 5}}>
              <MaterialCommunityIcons
                name="clock-time-five-outline"
                size={30}
                style={globalStyles.textPrimary}
              />
            </Text>
            <Text
              style={[
                globalStyles.textPrimary,
                globalStyles.fontMedium,
                {fontSize: 18},
              ]}>
              {startText}
            </Text>
            {startText && endText ? (
              <Text
                style={[
                  {marginHorizontal: 6},
                  globalStyles.fontBlack,
                  globalStyles.textPrimary,
                ]}>
                -
              </Text>
            ) : null}
            <Text
              style={[
                globalStyles.textPrimary,
                globalStyles.fontMedium,
                {fontSize: 18},
              ]}>
              {endText}
            </Text>
          </View>
        </View>

        {/* right mark btn */}
        {check ? (
          <View>
            <Text>
              <Ionicons
                name="checkmark-sharp"
                size={25}
                style={[globalStyles.textGreen]}
              />
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default TimeEstimateComponent;

const styles = StyleSheet.create({});
