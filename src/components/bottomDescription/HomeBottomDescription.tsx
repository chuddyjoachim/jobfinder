import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {deviceWidth, globalStyles} from '../../constants/constant';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BlackButton from '../buttons/BlackButton';
import {useNavigation} from '@react-navigation/core';
import {StackParamList} from '../../root/navigator/MainNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainNavigationProp} from '../../types/navigation';

const HomeBottomDescription = () => {
  const navigation = useNavigation<MainNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.innerPadTop}>
        {/* top drawer design */}
        <View style={styles.topStyleContainer}>
          <View style={styles.topStyle} />
        </View>

        <View style={styles.wrapper}>
          <View>
            {/* input test */}
            <View style={styles.descInputContainer}>
              <Text style={styles.descText}>Title</Text>
            </View>

            {/* input select */}
            <View style={styles.descInputContainer}>
              <Text style={styles.descText}>Job description</Text>
              <Text style={{marginLeft: 5}}>
                <MaterialIcon
                  name="keyboard-arrow-down"
                  size={20}
                  color={'#4c4c4c'}
                />
              </Text>
              {/* <Text style={{marginLeft: 5}}>Icon</Text> */}
            </View>

            {/* action buttons */}
            {/* time btn */}
            <View style={styles.optionNavContainer}>
              <View
                style={[
                  styles.optionNavBtn,
                  {borderRightColor: '#d7d7d7', borderRightWidth: 1},
                ]}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('TimeEstimate');
                  }}>
                  <View style={styles.optionNavTouch}>
                    <Text>
                      <MaterialCommunityIcons
                        name="clock-time-five"
                        size={20}
                        color={'#4c4c4c'}
                      />
                    </Text>
                    <Text style={{marginHorizontal: 8, color: '#4c4c4c'}}>
                      Time estimate
                    </Text>
                    <Text>
                      <MaterialIcon
                        name="keyboard-arrow-down"
                        size={18}
                        style={globalStyles.textPrimary}
                      />
                    </Text>
                  </View>
                </Pressable>
              </View>

              {/* cash btn */}
              <View style={styles.optionNavBtn}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Payment');
                  }}>
                  <View style={[styles.optionNavTouch]}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text style={{marginHorizontal: 4}}>
                        <MaterialCommunityIcons
                          name="cash"
                          size={25}
                          style={globalStyles.textGreen}
                        />
                      </Text>
                      <Text style={globalStyles.textPrimary}>Cash</Text>
                    </View>
                    <MaterialIcon
                      name="keyboard-arrow-down"
                      size={18}
                      style={globalStyles.textPrimary}
                    />
                  </View>
                </Pressable>
              </View>
            </View>

            {/* proceed */}
            <View
              style={{
                marginTop: 20,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: '80%', maxWidth: 600}}>
                <BlackButton
                  onPress={() => {
                    return navigation.navigate('Destination');
                  }}
                  radius={10}>
                  <Text style={[globalStyles.textWhite, globalStyles.fontBold]}>
                    Proceed
                  </Text>
                </BlackButton>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeBottomDescription;

const styles = StyleSheet.create({
  container: {
    // height: 300,
    width: '100%',
    backgroundColor: '#fff',
  },
  innerPadTop: {
    width: '100%',
    // height: 300,
    backgroundColor: '#fff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    top: -30,
  },
  topStyleContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  topStyle: {
    width: 55,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#d7d7d7',
  },
  wrapper: {
    width: deviceWidth,
    maxWidth: 600,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  descInputContainer: {
    height: 55,
    width: '100%',
    backgroundColor: '#DEF0ED',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 2,
  },
  descText: {
    fontSize: 15,
    fontWeight: '500',
  },
  optionNavContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#d7d7d7',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  optionNavBtn: {
    width: '50%',
    height: 60,
  },
  optionNavTouch: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
});
