import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import {FeedStackScreen} from '../stack/StckNavigation';

// Just to setup the screen
const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Feed" component={FeedStackScreen} />
      <Tab.Screen name="Friends" component={SettingsScreen} />
      <Tab.Screen name="Events" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
