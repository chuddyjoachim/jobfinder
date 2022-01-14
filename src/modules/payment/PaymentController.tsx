import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeadTitleBackButton from '../../components/HeadTitleBackButton';
import {
  deviceHeight,
  deviceWidth,
  globalStyles,
} from '../../constants/constant';
import {MainNavigationProp} from '../../types/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BlackButton from '../../components/buttons/BlackButton';

const PdComponent: React.FC = ({children}) => {
  return (
    <View
      style={{
        width: deviceWidth,
        maxWidth: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderTopColor: '#4c4c4c',
        borderTopWidth: 1,
        paddingVertical: 25,
      }}>
      <View
        style={{
          minWidth: '100%',
        }}>
        {children}
      </View>
    </View>
  );
};

const PaymentController = () => {
  const navigation = useNavigation<MainNavigationProp>();
  return (
    <>
      <View style={{backgroundColor: '#fff', height: deviceHeight}}>
        <SafeAreaView />
        <HeadTitleBackButton
          btnPress={() => {
            navigation.goBack();
          }}
          title="Payment Methods"
        />

        <View style={{marginTop: 10}}>
          {/* mastercard */}
          <PdComponent>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/mastercard.png')}
                style={{
                  width: 40,
                  marginRight: 15,
                }}
              />
              <Text
                style={[
                  globalStyles.fontMedium,
                  globalStyles.fontBlack,
                  {fontSize: 18},
                ]}>
                5698 9584 **** ****
              </Text>
            </View>
          </PdComponent>
          {/* paystack */}
          <PdComponent>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../assets/images/paystack.png')}
                style={{
                  height: 40,
                  width: 80,
                  marginRight: 15,
                }}
              />
              <Text style={[globalStyles.fontMedium, {fontSize: 18}]}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={30}
                  style={globalStyles.textGreen}
                />
              </Text>
            </View>
          </PdComponent>
          {/* add card */}
          <PdComponent>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={[
                  globalStyles.textBlack,
                  globalStyles.fontMedium,
                  {fontSize: 18},
                ]}>
                Add card
              </Text>
              <Text style={[globalStyles.fontMedium, {fontSize: 18}]}>
                <AntDesign
                  name="pluscircle"
                  size={30}
                  style={globalStyles.textBlack}
                />
              </Text>
            </View>
          </PdComponent>
          {/* cash */}
          <PdComponent>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={[
                  globalStyles.textBlack,
                  globalStyles.fontMedium,
                  {fontSize: 18},
                ]}>
                Cash
              </Text>
              <Text style={[globalStyles.fontMedium, {fontSize: 18}]}>
                {/* <AntDesign name="pluscircle" size={30} style={globalStyles.textBlack}/> */}
                <MaterialCommunityIcons
                  name="cash"
                  size={35}
                  style={globalStyles.textGreen}
                />
              </Text>
            </View>
          </PdComponent>
          {/* line */}
          <View style={{borderTopColor: '#4c4c4c', borderTopWidth: 1}} />
          {/* selected */}
          <View style={{paddingVertical: 40, paddingHorizontal: 20}}>
            <Image
              source={require('../../assets/images/paystack.png')}
              style={{
                height: 80,
                width: 160,
                marginRight: 15,
                alignSelf: 'flex-end',
                marginVertical: 10,
              }}
            />
          </View>
          {/* proceed */}
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: '80%', maxWidth: 600}}>
              <BlackButton radius={10}>
                <Text style={[globalStyles.textWhite, globalStyles.fontBold]}>
                  select
                </Text>
              </BlackButton>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default PaymentController;

const styles = StyleSheet.create({});
