import {View} from 'react-native';
import React from 'react';
import MyButton from './MyButton';

export default {
  title: 'MyButton',
  component: MyButton,
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    backgrounds: {
      values: [
        {name: 'red', value: '#f00'},
        {name: 'green', value: '#0f0'},
        {name: 'blue', value: '#00f'},
      ],
    },
  },
};

export const Basic = args => <MyButton {...args} />;
export const Secondary = args => <MyButton {...args} />;

Basic.args = {
  text: 'Hello Basic',
  color: 'purple',
};

Secondary.args = {
  text: 'Hello Secondary',
  color: 'blue',
};
