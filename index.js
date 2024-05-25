/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import './i18n';
import {PaperProvider} from 'react-native-paper';
import CustomTheme from './src/config/ThemeConfig';

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider theme={CustomTheme}>
        <App />
      </PaperProvider>
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
