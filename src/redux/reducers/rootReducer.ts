import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dataReducer} from './dataReducer';

const counterPersistConfig = {
  key: 'counter',
  whitelist: ['count'],
  storage: AsyncStorage,
};

const dataPersistConfig = {
  key: 'data',
  whitelist: [],
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterReducer),
  data: persistReducer(dataPersistConfig, dataReducer),
});

export default rootReducer;
