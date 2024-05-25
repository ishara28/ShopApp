import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './bottom/BottomTabNavigation';

const NavigationIndex = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default NavigationIndex;

const styles = StyleSheet.create({});
