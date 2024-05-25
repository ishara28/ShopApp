import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import {dataSaga} from '../saga/dataSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger), // configure logger only in DEBUG mode
);
export const persistor = persistStore(store);

sagaMiddleware.run(dataSaga);
