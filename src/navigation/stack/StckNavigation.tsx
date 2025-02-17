import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

const FeedStack = createNativeStackNavigator();

const Feed = () => {
  const theme = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Text variant="labelSmall">Feed</Text>
      <Text variant="displayLarge">Display Large</Text>
      <Text variant="displayMedium">Display Medium</Text>
      <Text variant="displaySmall">Display small</Text>

      <Text variant="headlineLarge">Headline Large</Text>
      <Text variant="headlineMedium">Headline Medium</Text>
      <Text variant="headlineSmall">Headline Small</Text>

      <Text variant="titleLarge">Title Large</Text>
      <Text variant="titleMedium">Title Medium</Text>
      <Text variant="titleSmall">Title Small</Text>

      <Text variant="bodyLarge">Body Large</Text>
      <Text variant="bodyMedium">Body Medium</Text>
      <Text variant="bodySmall">Body Small</Text>

      <Text variant="labelLarge">Label Large</Text>
      <Text variant="labelMedium">Label Medium</Text>
      <Text variant="labelSmall">Label Small</Text>
    </View>
  );
};
const FeedStackScreen = () => {
  return (
    <FeedStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <FeedStack.Screen
        options={{headerShown: false}}
        name="Feed"
        component={Feed}
      />
    </FeedStack.Navigator>
  );
};

export {FeedStackScreen};
