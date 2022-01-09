import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DestinationBottomDescription from '../../components/bottomDescription/DestinationBottomDescription';
import DestinationMap from '../../components/map/DestinationMap';
import {
  deviceHeight,
  deviceWidth,
  globalStyles,
} from '../../constants/constant';

const DestinationController = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <>
          <View
            style={{
              width: deviceWidth,
              height: deviceHeight,
              // backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SafeAreaView />
            <View
              style={{
                paddingHorizontal: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/loading.png')}
                style={{
                  width: 180,
                  height: 180,
                  marginBottom: 40,
                }}
              />
              <Text
                style={[
                  globalStyles.textGreen,
                  globalStyles.fontBold,
                  {fontSize: 22, textAlign: 'center'},
                ]}>
                Waiting for confirmation
              </Text>
              <Text
                style={[
                  globalStyles.textPrimary,
                  globalStyles.fontNormal,
                  {fontSize: 18, marginTop: 15, textAlign: 'center'},
                ]}>
                Please wait for Sammiez to accept the job offer
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <DestinationMap />
          <DestinationBottomDescription />
        </>
      )}
    </>
  );
};

export default DestinationController;

const styles = StyleSheet.create({});
