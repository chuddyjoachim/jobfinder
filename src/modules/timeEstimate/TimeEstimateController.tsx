import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeadTitleBackButton from '../../components/HeadTitleBackButton';
import TimeEstimateComponent from '../../components/TimeEstimateComponent';
import {MainNavigationProp} from '../../types/navigation';

const TimeEstimateController = () => {
  const navigation = useNavigation<MainNavigationProp>();
  return (
    <>
      <SafeAreaView />
      <View>
        {/* HeadTitleBackButton */}
        <HeadTitleBackButton
          btnPress={() => {
            navigation.goBack();
          }}
          title="Time Estimate"
        />
        {/* time estimate */}
        <View style={{paddingTop: 20}}>
          <TimeEstimateComponent startText='less than 15 minutes' check/>
          <TimeEstimateComponent startText="5 minutes" endText="30 minutes" />
          <TimeEstimateComponent startText="31 minutes" endText="60 minutes" />
          <TimeEstimateComponent startText="1 hour" endText="2 hours" />
          <TimeEstimateComponent startText="2 hours" endText="3 hours" />
          <TimeEstimateComponent startText="above 4 hours" />
        </View>
      </View>
    </>
  );
};

export default TimeEstimateController;

const styles = StyleSheet.create({});
