import React from 'react';
import {View} from 'react-native';
import NavigationIndex from './src/navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={{flex: 1}}>
      <NavigationIndex />
    </SafeAreaView>
  );
};

export default App;

// To run story book
// export default require('./.storybook').default;
